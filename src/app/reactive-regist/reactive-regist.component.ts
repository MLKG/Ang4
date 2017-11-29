import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }
  onSubmit() {
    // username
    // const userNameValid: boolean = this.formModel.get('username').valid;
    // console.log('username的校验结果' + userNameValid);
    // const userNameErrors: any = this.formModel.get('username').errors;
    // console.log('username的错误信息是' + JSON.stringify(userNameErrors));
    // mobile
    // const mobileValid: boolean = this.formModel.get('mobile').valid;
    // console.log('mobile的校验结果' + mobileValid);
    // const mobileErrors: any = this.formModel.get('mobile').errors;
    // console.log('mobile的错误信息是' + JSON.stringify(mobileErrors));
    // passwordsGroup
    // const passwordsGroupValid: boolean = this.formModel.get('passwordsGroup').valid;
    // console.log('passwordsGroup的校验结果' + passwordsGroupValid);
    // const passwordsGroupErrors: any = this.formModel.get('passwordsGroup').errors;
    // console.log('passwordsGroup的错误信息是' + JSON.stringify(passwordsGroupErrors));
    // form
    console.log(this.formModel.get('username').invalid);
    if (this.formModel.get('passwordsGroup').invalid) {
      console.log(this.formModel.get('passwordsGroup').errors.equal.desc);
    }
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
  ngOnInit() {
  }

}
