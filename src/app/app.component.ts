import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  detail: boolean;
  cakes: [];
  newCake: any;
  selectedCake: {}

  constructor(private _httpService: HttpService){
    
  }
  ngOnInit(){
    this.cakes;
    this.newCake = {baker: "", img: ""};
    this.getCakes();
    this.selectedCake = {id: "", baker: "", img: "", rating: ""}

    
  }
  title = "the Cake Rating App"

  getCakes(){
    this.cakes = [];
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Here be data: ", data)
      for(var i = 0; i < data.data.length; i++){
        this.cakes.push(data.data[i]) ;
      }
    });
  }

  uploadCake(){
    let observable = this._httpService.uploadCake(this.newCake);
    observable.subscribe( data => console.log("Attempting to upload cake with: ", data))
    this.newCake = {baker: "", img: ""}
    this.getCakes()
  }

  showCake(id: String){
    this.detail = true;
    console.log(`Finding ${id}`);
    let observable = this._httpService.showCake(id);
    observable.subscribe(data => {
      console.log("Here be single data: ", data)
      this.selectedCake = data;
      this.selectedCake['rating'] = this.getAvgRating(data);
    })
  }
  getAvgRating(data){
    var sum: number = 0;
    
    for(var i = 0; i< data.data[0].comments.length; i++){
      sum += data.data[0].comments[i].rating
    }
    return sum/data.data[0].comments.length-1
  }
}