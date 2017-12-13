import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { AppComponent } from 'app/app.component';
import { StaffsComponent } from 'app/staffs/staffs.component';

const appRoutes: Routes = [
  { path: 'staffs', component: StaffsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'app', component: AppComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
