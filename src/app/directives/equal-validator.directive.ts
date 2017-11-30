import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalValidator } from '../validator/validators';
// multi: true表示一个token下可以挂多个值
@Directive({
  selector: '[appEqual]',
  providers: [
    {provide: NG_VALIDATORS, useValue: equalValidator, multi: true}
  ]
})
export class EqualValidatorDirective {

  constructor() { }

}
