import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';
import {DatePipe} from '@angular/common';
import {WebSocketService} from '../shared/web-socket.service';
import {Subscription} from 'rxjs/Subscription';

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
  isWatched = false;
  currentBid: number;
  subscription: Subscription;
  constructor(private routerInfo: ActivatedRoute,
              private productService: ProductService,
              private wsService: WebSocketService,
              private datePipe: DatePipe) { }

  ngOnInit() {
    // this.routerInfo.params.subscribe((params: Params) => {
    //   const productId = params['productId'];
    //   console.log(productId == 1);
    //   this.product = this.productService.getProduct(productId);
    // });
    const productId = Number(this.routerInfo.snapshot.params['productId']);
    this.productService.getProduct(productId).subscribe(product => {
      this.product = product;
      this.currentBid = product.price;
    });
    this.productService.getCommentsForProductId(productId).subscribe((comments) => {
      this.comments = comments;
    });
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
  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id).subscribe((products) => {
        const product = products.find(p => p.productId === this.product.id);
        this.currentBid = product.bid;
      });
    }
  }
}
