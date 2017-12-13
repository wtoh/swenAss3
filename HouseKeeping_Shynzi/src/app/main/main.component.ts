import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  rooms;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  toggleRoom(roomNo: String, value: Boolean) {
    var newValue;

    if (value == true) 
      newValue = false;
    else 
      newValue = true;

    this.appService.updateRoomCleaning(roomNo, newValue).subscribe(room => {
      console.log(roomNo, newValue);
      alert("Updated room!");

      this.appService.getAllRooms().subscribe(rooms => {
        this.rooms = rooms;
      });
    });
  }

  openRemark(no: String) {
    var remark = prompt("Enter the remark you wish to add.");

    this.appService.updateRoomRemark(no, remark).subscribe(room => {
      alert("Added remark!");

      this.appService.getAllRooms().subscribe(rooms => {
        this.rooms = rooms;
      });
    });
  }

}
