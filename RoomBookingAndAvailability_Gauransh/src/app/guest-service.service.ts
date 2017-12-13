import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Guest } from './guest';

@Injectable()
export class GuestServiceService {
  result:any;  

  constructor(private _http : Http) { }

  insertGuest(post : Guest){
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this._http.post('/api/guests', JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }

}
