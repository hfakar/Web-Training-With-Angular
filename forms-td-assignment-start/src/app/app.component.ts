import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choice = 'advenced';
  value: string;
  @ViewChild('f') submittedForm: NgForm;
  onSubmit() {
      this.value = this.submittedForm.value;
  }
}
