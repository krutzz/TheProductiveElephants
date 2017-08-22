import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts-container/posts.component';
import { PostsRoutes } from './posts.routing';
import { PostsService } from './providers/posts-service/Posts.service';
import { UtilsModule } from './../shared/utils/utils.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutes,
    UtilsModule
  ],
  providers: [PostsService],
})
export class PostsModule { }
