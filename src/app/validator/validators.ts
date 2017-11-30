import { FormControl, FormGroup} from '@angular/forms';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


export function  mobileValidator(control: FormControl): any {
  const phoneReg = /^1[3-9]\d{9}$/;
  const vaild = phoneReg.test(control.value);
  // console.log('mobile的校验结果是' + vaild);
  return vaild ? null : { mobile: true };
}
export function  mobileAsyncValidator(control: FormControl): any {
  const phoneReg = /^1[3-9]\d{9}$/;
  const vaild = phoneReg.test(control.value);
  // console.log('mobile的校验结果是' + vaild);
  return Observable.of(vaild ? null : { mobile: true }).delay(5000);
}
export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pconfirm: FormControl = group.get('pconfirm') as FormControl;
  let valid = false;
  if (password && pconfirm) {
    valid = (password.value === pconfirm.value);
  }
  // console.log('交易密码的校验结果是' + valid);
  return valid ? null : { equal: {desc: '密码和确认密码不匹配'} };
}
