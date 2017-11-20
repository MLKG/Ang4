import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private imgUrl = 'http://placehold.it/820x230';
  product: Product;
  comments: Comment[];
  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params: Params) => {
    //   const productId = params['productId'];
    //   console.log(productId == 1);
    //   this.product = this.productService.getProduct(productId);
    // });
    const productId: number = this.routerInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
}
