import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, debounce, interval, scan, throwError } from 'rxjs';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  searchEmployee(name: string): Observable<any> {
    return this.http.get(`/employee/search/${name}`).pipe(
      // scan(i => ++i, 1),
      // debounce(i => interval(5000)),
      catchError(this.handleError)
    );
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`/employee/list`).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.log(errorResponse);
    return throwError(() => errorResponse );
  }

}
