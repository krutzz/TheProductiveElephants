import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/gards/auth.guard';
import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PostsComponent },
  { path: 'new', component: PostnewadComponent, canActivate: [AuthGuard] },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {

}
