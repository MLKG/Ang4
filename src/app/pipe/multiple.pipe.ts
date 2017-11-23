import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, args1?: any, args2?: any, args3?: any): any {
    console.log(args1);
    console.log(args2);
    console.log(args3);
    return value;
  }

}
