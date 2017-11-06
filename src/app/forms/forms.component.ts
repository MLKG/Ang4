import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [`
    input.ng-invalid {
      border: 3px solid red;
    }
    input.ng-valid {
      border: 3px solid green;
    }
    fieldset {
      border: none;
      padding: 0;
      margin: 0;
    }
    select.ng-invalid + label:after {
      content: '<-- 请选择版本!'
    }
  `]
})
export class FormsComponent implements OnInit {
  username = 'Lin@qq.com';
  versions = ['1.X', '2.X', '3.X'];
  books = ['Ang1', 'Ang2', 'Ang3'];
  versionName = '2.X';
  onSubmit(value) {
    console.log(value);
  }
  constructor() {
  }
  ngOnInit() {
  }
}
