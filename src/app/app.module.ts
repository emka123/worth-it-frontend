import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { RegistrationBarComponent } from './registration-bar/registration-bar.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    RegistrationBarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],

  bootstrap: [AppComponent],
 
})
export class AppModule { }
