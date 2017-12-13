import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'guests',
    component: GuestInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
