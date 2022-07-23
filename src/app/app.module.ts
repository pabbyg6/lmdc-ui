import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LmdcInputModule } from 'projects/components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LmdcInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
