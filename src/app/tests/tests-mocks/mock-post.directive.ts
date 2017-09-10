import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-post'
})
export class MockPostDirective {

  @Input()
  post;
  constructor() { }

}
