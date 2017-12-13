import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})

export class StaffsComponent implements OnInit {
  staffs;

  editing = false;
  staffIDEditing: String;

  inputName: String = '';
  inputID: String = '';
  inputPassword: String = '';
  inputAccess: String = '';
  inputPos: String = '';
  inputSalary: String = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAllStaffs().subscribe(staffs => {
      this.staffs = staffs;

      staffs.forEach(element => {

      });
    });
  }

  getAllStaffs() {
    this.appService.getAllStaffs().subscribe(staffs => {
      this.staffs = staffs;
    });
  }

  addStaff() {
    if (this.inputID == '' || this.inputName == '' || this.inputAccess == '' || this.inputPos == '' || this.inputSalary == '')
      return;

    if (!isNumeric(this.inputAccess) || !isNumeric(this.inputSalary)) {
      alert("Access level and salary must be in numbers only.");
      return;
    }

    if (this.inputPassword == '')
      this.inputPassword = 'Not Applicable';

    this.appService.getStaffByID(this.inputID).subscribe(staff => {
      if (staff.length != 0) {
        alert("Staff ID already exists.");
        return;
      } else {
        this.appService.createStaff(this.inputName, this.inputID, this.inputPassword, Number(this.inputAccess), this.inputPos, Number(this.inputSalary)).subscribe(staff => {
          this.inputName = '';
          this.inputID = '';
          this.inputPassword = '';
          this.inputAccess = '';
          this.inputPos = '';
          this.inputSalary = '';

          alert("Staff added.");
          this.getAllStaffs();
        });
      }
    });
  }

  deleteStaff(staffid: String) {
    this.appService.deleteStaff(staffid).subscribe(staff => {
      alert("Staff deleted.");

      this.getAllStaffs();
    });

  }

  editStaff(staffid: String) {
    this.editing = true;

    this.staffIDEditing = staffid;
    document.getElementById('editorTitle').innerHTML = ('Editing Staff Of Staff ID: ' + staffid);

    this.appService.getStaffByID(staffid).subscribe(staff => {
      this.inputID = staff[0].staffid;
      this.inputName = staff[0].name;
      this.inputPassword = staff[0].password;
      this.inputPos = staff[0].jobPosition;
      this.inputSalary = staff[0].salary;
      this.inputAccess = staff[0].accessLevel;
    });
  }

  updateStaff() {
    if (this.inputID === '' || this.inputName === '' || this.inputAccess === '' || this.inputPos === '' || this.inputSalary === '')
      return;

    if (!isNumeric(this.inputAccess) || !isNumeric(this.inputSalary)) {
      alert("Access level and salary must be in numbers only.");
      return;
    }

    if (this.inputPassword == '')
      this.inputPassword = 'Not Applicable';

    this.appService.getStaffByID(this.inputID).subscribe(staff => {
      if (staff.length != 0) {
        if (staff[0].staffid == this.staffIDEditing) {
          this.appService.updateStaff(this.staffIDEditing, this.inputName, this.inputID, this.inputPassword, Number(this.inputAccess), this.inputPos, Number(this.inputSalary)).subscribe(staff => {
            this.inputName = '';
            this.inputID = '';
            this.inputPassword = '';
            this.inputAccess = '';
            this.inputPos = '';
            this.inputSalary = '';
  
            alert("Staff updated.");
            this.getAllStaffs();
            this.editing = false;
          });
        } else {
          alert("Staff ID already exists.");
          return;
        }
      } else {
        this.appService.updateStaff(this.staffIDEditing, this.inputName, this.inputID, this.inputPassword, Number(this.inputAccess), this.inputPos, Number(this.inputSalary)).subscribe(staff => {
          this.inputName = '';
          this.inputID = '';
          this.inputPassword = '';
          this.inputAccess = '';
          this.inputPos = '';
          this.inputSalary = '';

          alert("Staff updated.");
          this.getAllStaffs();
          this.editing = false;

          document.getElementById('editorTitle').innerHTML = ('Add New Staff To DataBase');
        });
      }
    });
  }

  cancelEditing() {
    this.editing = false;
    this.inputID = '';
    this.inputAccess = '';
    this.inputName = ''
    this.inputPassword = '';
    this.inputPos = '';
    this.inputSalary = '';

    document.getElementById('editorTitle').innerHTML = ('Add New Staff To DataBase');
  }
}
