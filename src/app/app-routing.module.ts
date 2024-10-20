import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './Components/task-list/task-list.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';

const routes: Routes = [
  {path:'', component:TaskListComponent},
  {path:'addTask', component:AddTaskComponent},
  {path:'edit/:id', component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
