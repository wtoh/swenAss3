import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'; 
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

