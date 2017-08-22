import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {
  @Input()
  loadingSpiner: string;
  @Input()
  src;
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
  }

  ngOnInit() {
  }

}
