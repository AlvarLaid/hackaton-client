import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn;
  username;

  logIn(username) {
    console.log('login', username);
    this.isLoggedIn = true;
    this.username = username;
    this.router.navigate(['categories']);
  }

  logOut() {
    console.log('logout');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
