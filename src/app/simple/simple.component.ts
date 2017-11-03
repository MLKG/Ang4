import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>
      {{message}}
    </p>
    <div>
        <input #myInput
        type="text"
        (keydown.enter)="onEnter($event, myInput.value)"
        [(ngModel)]="message"
        [ngClass]="{mousedown: isMousedown}"
        >
        <!--[(ngModel)] 双向数据绑定--><!--[ngModel] 单向数据绑定-->
        <button (click)="update.emit({text: message})">更新</button>
        <div [ngStyle]="{color: 'white', 'background-color': 'black'}"
             [style.border-top]="'1px solid blue'"
             [style.font-size.px]="fontSize"
        >Uses fixed white text on blue background</div>
    </div>
  `,
  styles: [`
    :host {
      margin: 10px;
      display: inline-block;
    }
    .mousedown {
      border: 2px solid red;
    }
    input:focus {
      color: blue;
    }
  `]
  /* :host 表示选择的是宿主元素,即组件模板中的app-simple元素 */
})
export class SimpleComponent implements OnInit {
  isMousedown: boolean;
  fontSize: number;
  @Input() message: string;
  @Input() index: number;
  @Output() update = new EventEmitter<{text: string}>();
  constructor() {
    this.isMousedown = true;
    this.fontSize = 12;
  }

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
  ngOnInit() {
  }
}
