import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.css']
})
export class LoadImageComponent implements OnInit {
  @Input()
  loadingSpiner: string;
  defaultImg: string;
  private _src;

  @Input()
  set src(src: string) {
    if (!!src) {
      this._src = src;
    } else {
      this._src = this.defaultImg;
    }
  }

  get src(): string {
    return this._src;
  }

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.loadingSpiner = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/loading.gif?alt=media&token=8a2ffb61-6356-4fbb-89c0-7045f3009832';
    this.defaultImg = 'https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/default.png?alt=media&token=c753755a-91f0-4f9d-95df-3dbe55ea7bb0';
    this.src = this.defaultImg;
  }

  ngOnInit() {
  }

}
