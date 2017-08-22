import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostnewadComponent } from './ads/postnewad/postnewad.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MostpoluarComponent,
    PostnewadComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    AppRoutes,
  ],
  providers: [AngularFireAuth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
