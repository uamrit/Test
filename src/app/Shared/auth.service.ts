import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  constructor() { }
  signUpUser(userName: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(userName, password);
  }

  signIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
     .then( response => { firebase.auth().currentUser.getIdToken()
      .then( (t: string) => this.token = t ); } );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then( (t: string) => this.token = t);
    return this.token;
  }

  IsAuthenticated(): boolean {
    return this.token != null;
  }
  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
