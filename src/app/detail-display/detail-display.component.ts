import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-display', 
  templateUrl: './detail-display.component.html',
  styleUrls: ['./detail-display.component.css']
})
export class DetailDisplayComponent implements OnInit {
  @Input() taskToShow: any;

  constructor() { }

  ngOnInit() { 
  }
  showTask(){
    console.log(this.taskToShow)
  }
}
