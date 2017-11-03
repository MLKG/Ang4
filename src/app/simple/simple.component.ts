import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>
      {{message}}
    </p>
    <div>
        <input #myInput type="text" (keydown.enter)="onEnter($event, myInput.value)" [(ngModel)]="message" style="border: 1px solid red;">
        <!--[(ngModel)] 双向数据绑定--><!--[ngModel] 单向数据绑定-->
        <button (click)="update.emit({text: message})">更新</button>
    </div>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {
  @Input() message: string;
  @Input() index: number;
  @Output() update = new EventEmitter<{text: string}>();
  constructor() {}

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
