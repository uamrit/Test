import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee/employee';
import { throwError as ObservablebleThrowError, Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _Url = '/assets/employees.json';
private _prop = 'initial Value';
public propChanged: BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);

getProp(): string {
return this._prop;
}
setProp(value): void {
  this._prop = value;
  this.propChanged.next(this._prop);
}
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._Url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return ObservablebleThrowError (error.message || 'server error');
  }
}
