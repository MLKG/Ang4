import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';
import {ChildrenComponent} from './children/children.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'app';
  stock = 'IBM';
  greeting = 'Hello';
  user: {name: string} = {name: 'Tom'};
  newPriceQuote: PriceQuote = new PriceQuote('', 0);
  @ViewChild('children1')
  children1: ChildrenComponent;
  message: string;

  buyHandler (event: any) {
    this.newPriceQuote = event;
  }
  ngOnInit(): void {
    this.message = '你好';
  }
  ngAfterViewInit(): void {
    console.log('父组件的视图初始化完毕');
  }
  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }
}
