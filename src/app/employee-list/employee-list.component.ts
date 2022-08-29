import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { EmployeesService, IEmployee } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employees: IEmployee[] = [];
  employees$: Observable<IEmployee[]> = new Observable();
  errorMessage: string = "";

  constructor(private employeesServices: EmployeesService) { }

  ngOnInit(): void {
    this.loadEmployees()
  }

  loadEmployees() {
    this.employees$ = this.employeesServices.getEmployees().pipe(
      catchError(error => {
        console.log(error);
        this.errorMessage = error.message

        return of([])
      })
    );
  }

  deleteEmployee(id: number = 0) {
    this.employeesServices.deleteEmployee(id).subscribe(result => {
      this.loadEmployees();
    })


  }



}
