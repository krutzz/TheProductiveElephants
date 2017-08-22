import { CommonModule } from '@angular/common';
import { LoadImageComponent } from './load-image/load-image.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoadImageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadImageComponent
  ]
})
export class UtilsModule { }
