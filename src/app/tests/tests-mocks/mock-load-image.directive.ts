import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-load-image'
})
export class MockLoadImageDirective {

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

  constructor() { }

}
