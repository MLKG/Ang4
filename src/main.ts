import { enableProdMode } from '@angular/core';  // 用来关闭angular的开发者模式
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';   // 告诉Angular用什么模块启动应用

import { AppModule } from './app/app.module';  // 导入主模块
import { environment } from './environments/environment';   // 导入环境配置

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
