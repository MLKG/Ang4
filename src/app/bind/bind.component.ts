import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl = 'http://placehold.it/400x220';
  constructor() { }

  ngOnInit() {
  }
  doOnClick(event: any) {
    console.log(event);
  }
  doOnInput(event: any) {
    console.log(event.target.value);  // 获取的是Dom属性是变化的，代表的是当前的值，可以改变
    console.log(event.target.getAttribute('value'));  // 获取的是html属性，是初始值固定的不变的，不能改变，作用是初始化Dom属性的值
  }
}
