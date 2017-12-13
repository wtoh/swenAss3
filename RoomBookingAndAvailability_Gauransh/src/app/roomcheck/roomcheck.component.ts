import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rooms } from '../rooms';
import { RoomserviceService } from '../roomservice.service';

@Component({
  selector: 'app-roomcheck',
  templateUrl: './roomcheck.component.html',
  styleUrls: ['./roomcheck.component.css']
})
export class RoomcheckComponent implements OnInit {
  roomFrm: FormGroup;
  rooms: Array<Rooms>;
  roomid: string;
  roomno: string;
  roomavail: string;

  constructor(private _roomservice: RoomserviceService, private router: Router, private aR: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this._roomservice.getRoomDetails()
    .subscribe(res => this.rooms = res);
  }

    updateRoom(room: Rooms) {
      for(var i = 0; i<this.rooms.length;i++){
        let no = this.rooms[i].no;
        if(no === this.roomno){
          this.roomid = this.rooms[i]._id;
          room.available = this.roomavail;
        }
      }
      
      this._roomservice.updateRoom(room, this.roomid)
        .subscribe(updateArticle => {
          this.router.navigateByUrl('/');
      })

    }

    roomCheck(roomno:string, roomavail:string){
      this.roomno = roomno;
      this.roomavail = roomavail;
    }
        

}
