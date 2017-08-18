import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
