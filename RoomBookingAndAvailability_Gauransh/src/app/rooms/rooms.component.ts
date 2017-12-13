import { Component, OnInit } from '@angular/core';
import { Rooms } from '../rooms';
import { RoomserviceService } from '../roomservice.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomDets: Array<Rooms> = [];
  amount = '';
  beds = '';
  available = 'yes';
  roomno:Array<string> = [];

  constructor(private _roomservice: RoomserviceService) { }

  ngOnInit() {
    this._roomservice.getRoomDetails()
    .subscribe(res => this.roomDets = res);
  }

  findRooms(amount:string, beds:string){
    this.amount = amount;
    this.beds = beds;
    for(var i = 0; i<this.roomDets.length;i++){
     let price:string = this.roomDets[i].price;
     let bed:string = this.roomDets[i].beds;
     let avail:string = this.roomDets[i].available;
     let roomno:string = this.roomDets[i].no;
     if(price === amount){
       if(bed === beds){
         if(avail === this.available){
          this.roomno.push(roomno);
         }         
       }
     } 
    }
  }

}
