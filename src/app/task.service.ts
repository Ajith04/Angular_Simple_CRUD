import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:5092/api/TaskItems';
  
  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<any[]>(this.url);
  }

  createTask(singleTask:any){
    return this.http.post(this.url, singleTask)
  }

  deleteTask(taskId:number){
    return this.http.delete(this.url + '/' + taskId);
  }

  getTask(taskId:number){
    return this.http.get<any>(this.url + '/' + taskId);
  }

  updateTask(singleTask:any){
    return this.http.put(this.url + '/' + singleTask.id, singleTask)
  }
}
