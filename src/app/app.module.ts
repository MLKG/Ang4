import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';
import { WebSocketService } from './shared/web-socket.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent },
  // 其他路径重定向到首页
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  // 只能声明组件，指令，管道
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    FilterPipe,
    HomeComponent
  ],
  // 声明模块，加载完模块(注入模块)之后，
  // 会在index.html寻找启动模块指定的主组件对应的CSS选择器，并加载对应的模板进行渲染
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  // 声明服务
  providers: [ProductService, WebSocketService, {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  // 声明主组件
  bootstrap: [AppComponent]
})
export class AppModule { }
