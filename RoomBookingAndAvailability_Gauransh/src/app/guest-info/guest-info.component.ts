import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';
import { GuestServiceService } from '../guest-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest-info',
  templateUrl: './guest-info.component.html',
  styleUrls: ['./guest-info.component.css']
})
export class GuestInfoComponent implements OnInit {
  guests : Array<Guest> = [];
  guestFrm : FormGroup;

  constructor(private _guestservice : GuestServiceService, private router: Router
    , private aR: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.guestFrm = this.fb.group({
      'name' : [null],
      'noofpeople' : [null],
      'phoneno' : [null],
      'email' : [null],
      'address' : [null],
      'cid' : [null],
      'cod' : [null],
      'addrem' : [null],
      'lco' : [null],
    });
  }

  addGuest(guest : Guest){
    this._guestservice.insertGuest(guest)
      .subscribe(newGuest => {
        this.guests.push(newGuest);
        this.router.navigateByUrl('/');
      })
  }
}
