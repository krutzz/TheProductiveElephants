import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts-container/posts.component';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }
