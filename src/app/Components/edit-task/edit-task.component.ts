import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { single } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})


export class EditTaskComponent implements OnInit{

  taskId:number;
  taskForm:FormGroup;

  constructor(private fb:FormBuilder, private taskService: TaskService, private router: Router, private toastr:ToastrService, private route: ActivatedRoute){
    let id = this.route.snapshot.paramMap.get("id");
    this.taskId = Number(id);

    this.taskForm = this.fb.group(
      {
        id:[''],
        title: ['', [Validators.required]],
        description: [''],
        dueDate: [''],
        priority: ['', [Validators.required]],
      }
    )
  }


  

  ngOnInit(): void {
    this.taskService.getTask(this.taskId).subscribe(data => {

      let dueDate = new Date(data.dueDate).toISOString().slice(0,10);

      this.taskForm.patchValue({
        id:data.id,
        title: data.title,
        description: data.description,
        dueDate: dueDate,
        priority: data.priority
      })
      
    },error => {
      this.toastr.error("Task not found.")
    }
    )

    
  }

   
  onsubmit(){
    const singleTask = this.taskForm.value;

    this.taskService.updateTask(singleTask).subscribe(data => {
      this.toastr.success("Task is updated successfully");
      this.router.navigate(['/'])
    })
  }


  reset(){
    this.taskForm.reset();
   }
  

  



}
