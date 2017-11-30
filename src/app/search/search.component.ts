import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModle: FormGroup;
  categories: string[];
  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModle = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, SearchComponent.positiveNumberValidator],
      category: ['-1']
    });
  }
  static positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    const price = parseInt(control.value, 10);
    if (price > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }
  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }
  onSearch() {
    if (this.formModle.valid) {
      console.log(this.formModle.value);
    }
  }
}
