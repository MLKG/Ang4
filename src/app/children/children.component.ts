import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('子组件的视图变更检测完毕');
  }
  greeting (name: string) {
    console.log('hello ' + name);
  }

}
