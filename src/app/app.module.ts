// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {routes} from "./app.routes";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, RouterOutlet, NgxGoogleAnalyticsModule.forRoot('G-S04M4SEWK6'), NgxGoogleAnalyticsRouterModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
