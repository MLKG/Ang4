import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [DatePipe]
})
export class ProductDetailComponent implements OnInit {

  private imgUrl = 'http://placehold.it/820x230';
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment = '';
  isCommentHidden = true;
  commentButton = '发表评论';
  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params: Params) => {
    //   const productId = params['productId'];
    //   console.log(productId == 1);
    //   this.product = this.productService.getProduct(productId);
    // });
    const productId = Number(this.routerInfo.snapshot.params['productId']);
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }
  addComment() {
    const comment = new Comment(
      0,
      this.product.id,
      this.datePipe.transform(new Date(), 'y-MM-dd HH:mm:ss'),
      '哒林',
      this.newRating,
      this.newComment
    );
    this.comments.unshift(comment);
    const sumTotal = this.comments.reduce((sum, item) => sum + item.rating, 0);
    this.product.rating = sumTotal / this.comments.length;
    this.newComment = '';
    this.newRating = 5;
    this.isCommentHidden = true;
    this.commentButton = '发表评论';
  }
  ratingNewValueClick(event: number) {
    this.newRating = event;
  }
  commentClick() {
    this.isCommentHidden = !this.isCommentHidden;
    if (this.isCommentHidden) {
      this.commentButton = '发表评论';
    } else {
      this.commentButton = '取消评论';
    }
  }
}
