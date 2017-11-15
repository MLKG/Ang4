import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [  // 只能声明组件，指令，管道
    AppComponent
  ],
  imports: [   // 声明模块
    BrowserModule
  ],
  providers: [],  // 声明服务
  bootstrap: [AppComponent]   // 声明主组件
})
export class AppModule { }
