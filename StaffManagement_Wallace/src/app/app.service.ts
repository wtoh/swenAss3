import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { 
    console.log('Service started.');
  }
    
  getAllStaffs() {
    return this.http.get('http://localhost:3000/api/staffs').map(res => res.json());
  }

  getStaffByID(id: String) {
    return this.http.get('http://localhost:3000/api/' + id).map(res => res.json());
  }

  createStaff(name: String, staffid: String, password: String, accessLevel: Number, jobPosition: String, salary: Number) {
    return this.http.get('http://localhost:3000/api/staff/' + name + "&" + staffid + "&" + password + "&" + accessLevel + "&" + jobPosition + "&" + salary).map(res => res.json());
  }

  deleteStaff(staffid: String) {
    return this.http.get('http://localhost:3000/api/delete/' + staffid).map(res => res.json());
  }

  updateStaff(oldstaffid: String, name: String, staffid: String, password: String, accessLevel: Number, jobPosition: String, salary: Number) {
    return this.http.get('http://localhost:3000/api/update/' + oldstaffid + "&" + name + "&" + staffid + "&" + password + "&" + accessLevel + "&" + jobPosition + "&" + salary).map(res => res.json());
  }
}
