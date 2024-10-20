import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  searchword = '';
  tasks:any[] = [];

  constructor(private taskService:TaskService, private toastr: ToastrService, private router:Router){

  }

  ngOnInit():void{
    this.loadTask();
  }

  loadTask(){
    this.taskService.getTasks().subscribe( d => {
      this.tasks = d;
    }
    )
  }

  onDelete(taskId:number){
    if(confirm('Do you want to delete?')){
      this.taskService.deleteTask(taskId).subscribe( data => {
        this.toastr.success('Task is successfully deleted');
        this.loadTask();
      })
    }
  }

  onEdit(taskId:number){
    this.router.navigate(['/edit', taskId])
  }

}
