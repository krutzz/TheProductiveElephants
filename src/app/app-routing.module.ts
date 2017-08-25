import { RouterModule, Routes } from '@angular/router';

import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { PostnewadComponent } from './posts/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UnAuthGuard } from './auth/gards/un-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsModule' },
  { path: 'mostpopular', component: MostpoluarComponent },
  { path: 'signin', component: SigninComponent, canActivate: [UnAuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [UnAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
