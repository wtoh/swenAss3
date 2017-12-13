import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputID;
  inputPW;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  signIn() {
    this.appService.getStaffByID(this.inputID).subscribe(staff => {
      if (staff.length == 0) {
        alert("Staff cannot be found or the password you entered is incorrect!");
        return;
      }

      if (staff[0].password == this.inputPW) {
        alert("logged in!");
        this.router.navigate(['/main']);
      } else {
        alert("Staff cannot be found or the password you entered is incorrect!");
      }
    });
  }
}
