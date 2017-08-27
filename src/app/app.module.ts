import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/gards/auth.guard';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { MostpoluarComponent } from './ads/mostpoluar/mostpoluar.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UnAuthGuard } from './auth/gards/un-auth.guard';
import { UtilsModule } from './shared/utils/utils.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MostpoluarComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule,
    UtilsModule
  ],
  providers: [AngularFireAuth, AuthService, AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
