// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterOutlet, NgxGoogleAnalyticsModule.forRoot('G-S04M4SEWK6')],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
