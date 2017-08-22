import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts-container/posts.component';
import { PostsRoutes } from './posts.routing';
import { PostsService } from './providers/posts-service/Posts.service';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutes,
  ],
  providers: [PostsService],
})
export class PostsModule { }
