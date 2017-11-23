import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnDestroy {
  clock: number;
  birthday: Date = new Date();
  pi = 1314.0255666;
  b = 20.6745;
  size = 66;
  subscription: Subscription;
  constructor() {
    Observable.interval(1000).subscribe(value => {
      this.clock = value;
      this.birthday = new Date();
    });
  }
  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

}
