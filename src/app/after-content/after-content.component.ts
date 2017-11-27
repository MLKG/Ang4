import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.css']
})
export class AfterContentComponent implements AfterContentInit, AfterContentChecked, AfterViewInit {
  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完毕');
  }

  ngAfterViewInit(): void {
    console.log('子组件的视图初始化完毕');
  }

}
