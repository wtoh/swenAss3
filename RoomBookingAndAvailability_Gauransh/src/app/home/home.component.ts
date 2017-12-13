import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }
  
  checkVal(username:string, password:string){
    this.username = username;
    this.password = password;
  }

}
