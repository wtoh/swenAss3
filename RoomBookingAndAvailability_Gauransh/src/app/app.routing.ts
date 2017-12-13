import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomcheckComponent } from './roomcheck/roomcheck.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'guestinfo', component: GuestInfoComponent },
  { path: '', component: GuestInfoComponent, pathMatch: 'full'},
  { path: 'rooms', component: RoomsComponent },
  { path: '', component: RoomsComponent, pathMatch: 'full'},
  {path: 'roomscheck', component: RoomcheckComponent },
  { path: '', component: RoomcheckComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);