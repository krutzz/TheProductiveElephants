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

  constructor() { }

  ngOnInit() {
  }

  slideChange(event) {
    this.slideChangeEvent.emit(event);
  }

}
