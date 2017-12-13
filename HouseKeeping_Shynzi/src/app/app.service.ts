import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { 
    console.log('Service started.');
  }
  
  updateRoomRemark(no: String, remark: String) {
    return this.http.get('http://localhost:3000/api/update/' + no + "&" + remark).map(res => res.json());
  }

  updateRoomCleaning(no: String, value: String) {
    return this.http.get('http://localhost:3000/api/room/' + no + "&" + value).map(res => res.json());
  }

  getAllRooms() {
    return this.http.get('http://localhost:3000/api/rooms').map(res => res.json());
  }

  getStaffByID(id: String) {
    return this.http.get('http://localhost:3000/api/' + id).map(res => res.json());
  }
}
