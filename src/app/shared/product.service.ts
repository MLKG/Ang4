import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {
  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('产品1被调用！！');
    return new Product(0, 'iphone7', 6999, '苹果手机一部');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
