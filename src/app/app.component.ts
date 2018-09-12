import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.getTasks();
    this.tasks;
  }
  title = "RESTFUL API CONTINUED"
  tasks = [];
  getTasks(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Here be data: ", data)
      for(var i = 0; i < data.data.length; i++){
        this.tasks.push(data.data[i]._id +" "+ data.data[i].title + " - " + data.data[i].description) ;
      }
    });
  }

}