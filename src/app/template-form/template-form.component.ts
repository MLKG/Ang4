import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  private userName = 'Dalin';
  mobileValid = true;
  mobileUntoched = true;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any, valid: boolean) {
    console.log(value);
    console.log(valid);
  }
  onMobileInput(form: NgForm) {
    if (form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobileUntoched = form.form.get('mobile').untouched;
    }
  }

}
