import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostnewadComponent } from './ads/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: '', component: CarouselComponent},
  {path: 'mostpopular', component: MostpoluarComponent},
  {path: 'postnewad', component: PostnewadComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MostpoluarComponent,
    PostnewadComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
