import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { LoadImageComponent } from './load-image/load-image.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [LoadImageComponent, PaginationComponent, CarouselComponent],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
  ],
  exports: [
    LoadImageComponent,
    PaginationComponent,
    CarouselComponent
  ]
})
export class UtilsModule { }
