import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
public baseUrl = 'http://localhost:55640/api/';
constructor(private http: HttpClient) { }

// Get all Users
getUsers(): Observable<User[]> {
 return this.http.get<User[]>(this.baseUrl + 'users')
 .pipe(catchError(this.handleError));
}

// add User
addUser(user: User): Observable<User> {
  return this.http.post<User>(this.baseUrl + 'users', user)
  .pipe(catchError(this.handleError)
  );
}

// Get user by Id
getUser(userId: number): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + userId).pipe(catchError(this.handleError));
}

// delete user
deleteUser(userId: number) {
  return this.http.delete(this.baseUrl + 'users/' + userId).pipe(catchError(this.handleError));
}

// Handale errors
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
