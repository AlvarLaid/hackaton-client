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
    this.isLoggedIn = true;
    this.username = username;
    this.username === 'admin'
      ? this.router.navigate(['categories'])
      : this.router.navigate(['categories']);
  }

  logOut() {
    console.log('logout');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
