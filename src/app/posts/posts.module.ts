import { CommonModule } from '@angular/common';
import { FormatEmptyPipe } from './pipes/format-empty/format-empty.pipe';
import { FormsModule } from '@angular/forms';
import { MostpoluarComponent } from './mostpoluar/mostpoluar.component';
import { NewPostPipe } from './pipes/transform-to-post/new-post.pipe';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './providers/posts-service/Posts.service';
import { RemoveSpacesPipe } from './pipes/remove-spaces/remove-spaces.pipe';
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
    PostEditComponent,
    RemoveSpacesPipe,
    FormatEmptyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilsModule,
    PostsRoutingModule,
  ],
  exports: [
    MostpoluarComponent,
    PostComponent,
    NewPostPipe
  ],
  providers: [PostsService],
})
export class PostsModule { }
