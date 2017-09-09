import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Output() slideChangeEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  items;

  loadingSpiner: string;

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  ngOnInit() {
  }

  slideChange(event) {
    this.slideChangeEvent.emit(event);
  }

}
