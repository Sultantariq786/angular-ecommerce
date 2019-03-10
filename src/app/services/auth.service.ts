import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  username;

  constructor(private router: Router) { }

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password),
    this.router.navigate(['/login'])
    .catch(
      error => console.log(error)
    );
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        const user = firebase.auth().currentUser.displayName;
        if (user) {
          this.username = user;
        } else {
          this.username = firebase.auth().currentUser.email;
        }
        // console.log(this.username);
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
      }
    )
    .catch(
      error => console.log(error)
    );
  }

  getToken() {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
    }
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    localStorage.removeItem('products');
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/login']);
    console.log('logged out');
  }

}
