import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {
    title:"home",
    path:"",
    component: HomeComponent
  },
  {
    title:"about",
    path:"about",
    component: AboutComponent
  }
];
