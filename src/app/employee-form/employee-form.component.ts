import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  nameInput = '';
  emailInput = '';
  genderInput = '';

  constructor(private employeesServices: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const obj = {
      name: this.nameInput,
      email: this.emailInput,
      gender: this.genderInput,
    };

    this.employeesServices.createEmployee(obj).subscribe(res => {
      this.router.navigate(["/"])
    })


  }

}
