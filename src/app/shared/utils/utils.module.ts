import { CommonModule } from '@angular/common';
import { LoadImageComponent } from './load-image/load-image.component';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [LoadImageComponent, PaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadImageComponent,
    PaginationComponent
  ]
})
export class UtilsModule { }
