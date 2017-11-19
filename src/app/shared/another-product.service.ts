///<reference path="logger.service.ts"/>
import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {
  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('产品2被调用！！');
    return new Product(1, 'sumang8', 3999, '三星手机一部');
  }

}
