import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  private rating = 0;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();
  // 输出属性是输入属性的名字 + ‘Change’的时候，在父组件可用自己用[(rating)]去进行双向绑定
  private stars: boolean[];
  @Input()
  private readonly = true;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  ngOnInit() {}
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
