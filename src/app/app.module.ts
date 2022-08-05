import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonUi, LmdcInputModule, LmdcTable } from 'projects/components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonUi,
   LmdcTable,
    LmdcInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
