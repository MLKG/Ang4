import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl = 'http://placehold.it/400x220';
  private isDisabled: boolean;
  size = 2;
  someExpression = 'ccc';
  isSpecial = true;
  isC = true;
  isD = true;
  canSave = true;
  greeting = 'A Value';
  name: string;
  bind: string;
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };
  constructor() {
    setTimeout(() => {
      this.divStyle = {
        color: 'yellow',
        background: 'red'
      };
    }, 3000);
    setInterval(() => {
      this.name = 'Tom';
    }, 3000);
    /*Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 === 0)
      .map(e => e * e)
      .subscribe(e => console.log(e));*/
  }
  ngOnInit() {
  }
  doOnClick(event: any) {
    console.log(event);
    this.isDisabled = !this.isDisabled;
  }
  doOnInput(event: any) {
    // console.log(event.target.value);  // 获取的是Dom属性是变化的，代表的是当前的值，可以改变
    // console.log(event.target.getAttribute('value'));  // 获取的是html属性，是初始值固定的不变的，不能改变，作用是初始化Dom属性的值
    this.name = event.target.value;
  }
}
