import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

import {environment as env} from "../../environments/environment"

export interface IEmployee {
  id?: number,
  name: string,
  email: string,
  gender: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private http: HttpClient) { }
  errorMessage = '';

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${env.baseUrl}employees`)
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${env.baseUrl}employees/${id}`)
  }

  createEmployee(employee: IEmployee) {
    return this.http.post(`${env.baseUrl}employees`, employee)
  }


  //

}
