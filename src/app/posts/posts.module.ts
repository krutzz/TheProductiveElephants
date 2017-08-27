import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewPostPipe } from '../new-post.pipe';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './providers/posts-service/Posts.service';
import { UtilsModule } from './../shared/utils/utils.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostnewadComponent,
    NewPostPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule,
    PostsRoutingModule,
  ],
  providers: [PostsService],
})
export class PostsModule { }
