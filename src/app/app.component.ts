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
  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.getTasks();
    this.tasks;
    this.display = false;
    this.detail = false;
  }
  title = "RESTFUL API INTERACTIVE"
  tasks = [];
  detailData = {};
  getTasks(){
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

  displayDetail(id: String): void{
    this.detail = true;
    console.log(`Finding ${id}`);
    let observable = this._httpService.displayDetail(id);
    observable.subscribe(data => {
      console.log("Here be single data: ", data)
      this.detailData = data;
    })

  }

}