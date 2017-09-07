import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MostpoluarComponent } from './mostpoluar/mostpoluar.component';
import { NewPostPipe } from './pipes/transform-to-post/new-post.pipe';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './providers/posts-service/Posts.service';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { UtilsModule } from './../shared/utils/utils.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostnewadComponent,
    NewPostPipe,
    PostDetailsComponent,
    MostpoluarComponent,
    ReversePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule,
    PostsRoutingModule,
  ],
  exports: [
    MostpoluarComponent
  ],
  providers: [PostsService],
})
export class PostsModule { }
