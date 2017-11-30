import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Array<any> = [];
  constructor(private http: Http) {
    const myHeaders: Headers = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.dataSource = this.http.get('/api/products', {headers: myHeaders}).map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe((data) => {
      this.products = data;
    });
  }

}
