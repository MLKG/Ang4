import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  // 只能声明组件，指令，管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
  ],
  // 声明模块，加载完模块(注入模块)之后，
  // 会在index.html寻找启动模块指定的主组件对应的CSS选择器，并加载对应的模板进行渲染
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // 声明服务
  providers: [],
  // 声明主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
