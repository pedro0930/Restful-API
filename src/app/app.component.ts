import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    this.getTasks()
  }
  tasks = [];

  getTasks(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Here be data", data)
      this.tasks = data['tasks']
    });
  }
}