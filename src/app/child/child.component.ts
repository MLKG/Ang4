import {Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  // @Input()
  // greeting: string;
  // @Input()
  // user: {
  //   name: string
  // };
  message: string;
  oldUserName: string;
  changeDetected = false;
  noChangeCount = 0;
  constructor() {
    console.log(666);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(JSON.stringify(changes, null, 2));
  }
  ngOnInit() {
    console.log(777);
  }
  ngDoCheck(): void {
    // if (this.user.name !== this.oldUserName) {
    //   this.changeDetected = true;
    //   console.log('DoCheck: user.name从' + this.oldUserName + '变为' + this.user.name);
    //   this.oldUserName = this.user.name;
    // }
    // if (this.changeDetected) {
    //   this.noChangeCount = 0;
    // } else {
    //   this.noChangeCount ++;
    //   console.log('DoCheck: user.name没变化时ngDoCheck方法以及被调用' + this.noChangeCount + '次');
    // }
    // this.changeDetected = false;
  }
  ngOnDestroy(): void {
    console.log('child2组件被销毁');
  }

}
