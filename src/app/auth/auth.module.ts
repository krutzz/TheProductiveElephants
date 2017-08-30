import { FormsModule, NgForm } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UnAuthGuard } from './guards/un-auth.guard';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  providers: [AngularFireAuth, AuthService, AuthGuard, UnAuthGuard],
})
export class AuthModule { }
