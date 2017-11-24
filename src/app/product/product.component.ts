import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  private imgUrl = 'http://placehold.it/320x150';
  // 构造函数
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe((value) => {
      this.keyword = value;
    });
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}

