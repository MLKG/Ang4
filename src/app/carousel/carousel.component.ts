import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private imgUrl = 'http://placehold.it/800x300';
  constructor() { }

  ngOnInit() {
  }

}
