import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { ContentComponent } from './content/content.component';
import { AfterContentComponent } from './after-content/after-content.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule, Routes} from '@angular/router';

const routeConfig: Routes = [
  {path: 'child1', component: ChildComponent},
  {path: 'child2', component: Child2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoteComponent,
    LifeComponent,
    ChildComponent,
    ChildrenComponent,
    ContentComponent,
    AfterContentComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
