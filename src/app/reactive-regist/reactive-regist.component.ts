import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
  mobileValidator(control: FormControl): any {
    const phoneReg = /^1[3-9]\d{9}$/;
    const vaild = phoneReg.test(control.value);
    console.log('mobile的校验结果是' + vaild);
    return vaild ? null : { mobile: true };
  }
  equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = (password.value === pconfirm.value);
    console.log('交易密码的校验结果是' + valid);
    return valid ? null : { equal: true };
  }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', this.mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, {validator: this.equalValidator})
    });
  }
  onSubmit() {
    const isValid: boolean = this.formModel.get('username').valid;
    console.log('username的校验结果' + isValid);
    const errors: any = this.formModel.get('username').errors;
    console.log('username的错误信息是' + JSON.stringify(errors));
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
