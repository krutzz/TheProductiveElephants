import { RouterModule, Routes } from '@angular/router';

import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { PostnewadComponent } from './ads/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'mostpopular', component: MostpoluarComponent },
  { path: 'postnewad', component: PostnewadComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
