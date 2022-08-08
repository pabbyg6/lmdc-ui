import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LmdcButton, LmdcCard, LmdcIcon, LmdcInputModule, LmdcTableModule } from 'projects/components/src/public-api';
import {CdkTableModule} from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmdcIconButton } from 'projects/components/src/lib/icon-button/lmdc-icon-button';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LmdcButton,
    LmdcIcon,
    CdkTableModule,
    LmdcIconButton,
    LmdcTableModule,
    LmdcCard,
    LmdcInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
