import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-detail-display', 
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {
  @Input() cakeToShow: any;
  newComment: {id: "", rating: "", text: ""}
  rating: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() { 
  this.newComment = {id:"", rating: "", text: ""}
  }
  comment(){
    this.newComment.id = this.cakeToShow.data[0]._id;
    let observable = this._httpService.comment(this.newComment);
    observable.subscribe(data => console.log("Attempting to upload comment with: ", data))
    this.newComment = {id: "", rating: "", text: ""}
  }
}
