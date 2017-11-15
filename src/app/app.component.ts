import { Component } from '@angular/core';
// 组件的必备元素：装饰器，模板，控制器
// 组件元数据装饰器
@Component({
  selector: 'app-root',  // css选择器
  templateUrl: './app.component.html', // 模板
  styleUrls: ['./app.component.css']  // css文件
})
// 控制器，逻辑写在这里
export class AppComponent {
  title = 'app';
}
