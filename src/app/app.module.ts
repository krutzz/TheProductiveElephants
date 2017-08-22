import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostnewadComponent } from './ads/postnewad/postnewad.component';
import { PostsComponent } from './posts/posts-container/posts.component';
import { PostsService } from './posts/providers/posts-service/Posts.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/header/header.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'mostpopular', component: MostpoluarComponent },
  { path: 'postnewad', component: PostnewadComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MostpoluarComponent,
    PostnewadComponent,
    PostsComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AngularFireAuth, AuthService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
