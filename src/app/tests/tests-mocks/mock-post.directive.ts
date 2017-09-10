import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'app-post'
})
export class MockPostDirective {

  @Input()
  post;
  constructor() { }

}
