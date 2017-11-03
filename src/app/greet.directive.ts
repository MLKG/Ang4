import { Directive, HostBinding, HostListener, Input, Attribute} from '@angular/core';

@Directive({
  selector: '[appGreet]'
})
export class GreetDirective {
  toggleShow: boolean;
  @Input () appGreet: string;
  @HostBinding() get innerText() {
    return this.appGreet;
  }
  @HostListener('click', ['$event'])
  onClick(event) {
    if (this.toggleShow) {
      this.appGreet = 'Hello, Clicked!';
    } else {
      this.appGreet = 'Hello, Smile!';
    }
    this.toggleShow = !this.toggleShow;
    console.dir(event);
  }
  constructor(@Attribute('author') public author: string,
              @Attribute('age') public age: number) {
    console.log(author);
    console.log(age);
    this.toggleShow = true;
  }
}
