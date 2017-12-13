import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GuestInfoComponent } from './guest-info/guest-info.component';
import { RoomsComponent } from './rooms/rooms.component';
import { routing }  from './app.routing';
import { RoomcheckComponent } from './roomcheck/roomcheck.component';
import { GuestServiceService } from './guest-service.service';
import { RoomserviceService } from './roomservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestInfoComponent,
    RoomsComponent,
    RoomcheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [GuestServiceService,RoomserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
