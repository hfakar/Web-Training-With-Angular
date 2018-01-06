import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  toggle = false;
  allClicks = [];
  counter = 1;
  constructor() { }

  ngOnInit() {
  }
  display() {
    this.allClicks.push(this.counter++);
    this.toggle === true ? this.toggle = false : this.toggle = true;
  }

}
