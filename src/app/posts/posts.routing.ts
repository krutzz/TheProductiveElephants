import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts-container/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PostsComponent },
  { path: ':id', component: PostComponent }
];

export const PostsRoutes = RouterModule.forChild(routes);
