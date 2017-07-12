
import { NgModule }             from '@angular/core';
import { ModuleWithProviders }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Dashboard/dashboard.component';

export const router: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent},
  { path: 'dashbaord', component: DashboardComponent }
  
  
  
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);
