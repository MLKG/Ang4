import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private imgUrl = 'http://placehold.it/820x230';
  private productTitle: string;
  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routerInfo.snapshot.params['productTitle'];
  }

}
