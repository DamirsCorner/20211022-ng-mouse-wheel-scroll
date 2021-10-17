import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HorizontalScrollDirective } from './horizontal-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalScrollDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
