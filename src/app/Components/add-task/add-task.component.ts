import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  constructor(private fb:FormBuilder, private taskService: TaskService, private router: Router, private toastr:ToastrService){

  }

  taskForm = new FormGroup(
    {
      Title : new FormControl('', Validators.required),
      Description : new FormControl(''),
      DueDate : new FormControl(''),
      Priority : new FormControl('', Validators.required)
    }
  )

 onSubmit(){
  let singleTask = this.taskForm.value;

  this.taskService.createTask(singleTask).subscribe(
    data => {
      this.toastr.success('Task is successfully saved.');
      this.router.navigate(["/"]);
    }
  )
 }

 reset(){
  this.taskForm.reset();
 }


}
