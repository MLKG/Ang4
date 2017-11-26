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
// 初始化logIndex 为1；
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
  // 输入属性titleName
  @Input()
  titleName: string;
  message = '消息';
  // 定义一个打印日志的方法
  logIt (msg: string) {
    console.log(`#${logIndex++} ${msg}`);  // #1 ngDoCheck
  }
  // 构造函数
  constructor() {
    console.log(this.titleName);
    this.logIt('name属性在constructor里的值是：' + this.titleName);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.logIt('titleName属性在ngOnChanges里的值是：' + changes['titleName'].currentValue);
  }
  ngOnInit(): void {
    this.logIt('ngOnInit');
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
