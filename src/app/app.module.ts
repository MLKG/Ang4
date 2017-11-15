import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [  // 只能声明组件，指令，管道
    AppComponent
  ],
  imports: [   // 声明模块，加载完模块(注入模块)之后，会在index.html寻找启动模块指定的主组件对应的CSS选择器，并加载对应的模板进行渲染
    BrowserModule
  ],
  providers: [],  // 声明服务
  bootstrap: [AppComponent]   // 声明主组件
})
export class AppModule { }
