import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes} from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router, private appService: AppService) {
    
  }

  title = 'Delonix Regia';
  loggedIn = false;
  loading = false;

  userName: String;
  userPassword: String;

  inputID: String = '';
  inputPassword: String = '';

  inputIDPass: String;
 

  login() {
    var idTextField = document.getElementById("inputID");
    var passwordTextField = document.getElementById("inputPassword");

    if (this.inputID == '' || this.inputPassword == '')
      return;

    if (this.inputPassword == 'Not Applicable') {
      alert("Account does not exist or the password is incorrect.");
      return;
    }

    this.inputIDPass = this.inputID;
    this.loading = true;

    idTextField.setAttribute("disabled", "");
    passwordTextField.setAttribute("disabled", "");

    this.appService.getStaffByID(this.inputID).subscribe(user => {
      if (!(user.length == 0)) {
        this.userPassword = user[0].password;
        this.userName = user[0].name;
        
        if (this.userPassword != this.inputPassword) {
          this.loading = false;

          idTextField.removeAttribute("disabled");
          passwordTextField.removeAttribute("disabled");

          alert("Account does not exist or the password is incorrect.");

          return;
        }
    
        if (user[0].accessLevel < 2) {
          alert("Error: Your account does not have the required privileges to access this module.")
          this.loading = false;
          
          return;
        }

        this.loggedIn = true;

        this.router.navigate(['staffs']);

        this.inputID = '';
        this.inputPassword = '';

        document.getElementById("navBrand").innerText = "Welcome, " + this.userName + ".";
      } else {
        this.loading = false;

        idTextField.removeAttribute("disabled");
        passwordTextField.removeAttribute("disabled");

        alert("Account does not exist or the password is incorrect.");
      }

      this.loading = false;

      idTextField.removeAttribute("disabled");
      passwordTextField.removeAttribute("disabled");
    });
  }

  logout(event) {
    this.loggedIn = false;
    this.router.navigate(['home']);

    document.getElementById("navBrand").innerText = "Delonix Regia";
  }
}