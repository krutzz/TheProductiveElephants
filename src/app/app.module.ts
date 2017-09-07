import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseModule } from './firebase/firebase.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { UtilsModule } from './shared/utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    UsersModule,
    FirebaseModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
