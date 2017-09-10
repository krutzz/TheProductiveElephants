import { CommonModule } from '@angular/common';
import { MockLoadImageDirective } from './tests-mocks/mock-load-image.directive';
import { MockPostDirective } from './tests-mocks/mock-post.directive';
import { NgModule } from '@angular/core';
import { RouterLinkStubDirective } from './tests-mocks/router-link-stub.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MockLoadImageDirective,
    MockPostDirective,
    RouterLinkStubDirective
  ]
})
export class TestModule { }
