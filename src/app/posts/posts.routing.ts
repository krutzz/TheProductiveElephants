import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { PostComponent } from './post/post.component';
import { PostnewadComponent } from './postnewad/postnewad.component';
import { PostsComponent } from './posts-container/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PostsComponent },
  { path: 'new', component: PostnewadComponent, canActivate: [AuthGuard] },
  { path: ':id', component: PostComponent }
];

export const PostsRoutes = RouterModule.forChild(routes);
