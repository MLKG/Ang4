import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // stock = '';
  newPriceQuote: PriceQuote = new PriceQuote('', 0);
  buyHandler (event: any) {
    this.newPriceQuote = event;
  }
}
