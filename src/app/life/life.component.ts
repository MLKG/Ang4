import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges
} from '@angular/core';
let logIndex = 1;
@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input()
  name: string;
  @Input()
  stock: string;
  logIt (msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  constructor() {
    this.logIt('name属性在constructor里的值是：' + name);
  }
  ngOnInit(): void {
    this.logIt('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    const name = changes['name'].currentValue;
    this.logIt('name属性在constructor里的值是：' + name);
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
}
