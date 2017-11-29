import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: [''],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    }, {});
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
