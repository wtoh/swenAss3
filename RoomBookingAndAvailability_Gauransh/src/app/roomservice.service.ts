import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Rooms } from './rooms';

@Injectable()
export class RoomserviceService {
  result:any;

  constructor(private _http : Http) { }

  getRoomDetails(){
    return this._http.get("/api/rooms")
      .map(result => this.result = result.json());
  }

  updateRoom(post: Rooms, id) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/rooms/'+id, JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }

}
