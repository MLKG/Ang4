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

  // dataSource: Observable<any>;
  products: Observable<any>;
  // products: Array<any> = [];
  constructor(private http: Http) {
    // this.dataSource = this.http.get('/api/products').map((res) => res.json());
    const myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');
    this.products = this.http.get('/api/products', {headers: myHeaders}).map((res) => res.json());
  }

  ngOnInit() {
    // this.dataSource.subscribe((data) => this.products = data);
  }

}
