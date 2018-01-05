import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assginment2',
  templateUrl: './assginment2.component.html',
  styleUrls: ['./assginment2.component.css']
})
export class Assginment2Component implements OnInit {
  username ="";


  constructor() { }

  ngOnInit() {
  }

  onReset(){
    this.username = "";
  }

}
