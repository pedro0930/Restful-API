import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  display: boolean;
  detail: boolean;
  newTask: any;
  editTask: any;
  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.getTasks();
    this.tasks;
    this.display = false;
    this.detail = false;
    this.newTask = {title: "", description: ""}
    this.editTask = {title: "", description: "", completed: "false", id: ""}
  }
  title = "RESTFUL API INTERACTIVE"
  tasks = [];
  detailData = {};
  getTasks(){
    this.tasks = [];
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Here be data: ", data)
      for(var i = 0; i < data.data.length; i++){
        this.tasks.push(data.data[i]) ;
      }
    });
  }
  displayData(){
    this.display = true;
  }
  delete(id: String): void{
    console.log(`delete by id, ID: ${id}`)
    let observable = this._httpService.delete(id);
    observable.subscribe(data => console.log("data deleted",data));
    this.getTasks();
  }
  displayDetail(id: String): void{
    this.detail = true;
    console.log(`Finding ${id}`);
    let observable = this._httpService.displayDetail(id);
    observable.subscribe(data => {
      console.log("Here be single data: ", data)
      this.detailData = data;
    })
  }

  createNewTask(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => console.log("Attempting to create new task with: ", data))
    this.newTask = {title: "", description: ""}
    this.getTasks();
  }
  edit(id: String){
    let observable = this._httpService.edit(this.editTask, id);
    observable.subscribe(data => console.log("Attempting to edit task with: ", data))
  }
}