import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerieModule } from './serie/serie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SerieModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }