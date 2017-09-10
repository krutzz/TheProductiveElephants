import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { ArticlesService } from './providers/articles/articles.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilsModule } from '../shared/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [ArticlesContainerComponent],
  exports: [ArticlesContainerComponent],
  providers: [ArticlesService]
})
export class ArticlesModule { }
