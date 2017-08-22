import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts-container/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: PostsComponent },
];

export const PostsRoutes = RouterModule.forChild(routes);
