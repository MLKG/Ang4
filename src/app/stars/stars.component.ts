import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating = 0;
  @Output()
  private ratingNewValue: EventEmitter<number> = new EventEmitter();
  // private ratingChange: EventEmitter<number> = new EventEmitter();
  // 输出属性是输入属性的名字 + ‘Change’的时候，在父组件可以直接用[(rating)]去进行双向绑定
  public stars: boolean[];
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
      // this.ratingChange.emit(this.rating);
      this.ratingNewValue.emit(this.rating);
    }
  }

}
