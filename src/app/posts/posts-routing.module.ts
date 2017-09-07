import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';
import { MostpoluarComponent } from './mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PostsComponent },
  { path: 'new', component: PostnewadComponent, canActivate: [AuthGuard] },
  { path: 'mostpopular', component: MostpoluarComponent },
  { path: ':id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {

}
