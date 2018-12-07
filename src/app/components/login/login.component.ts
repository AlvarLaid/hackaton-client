import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  username: string;
  password: string;
  showSpinner;

  ngOnInit() {
    console.log('i am loggin in');
  }

  login(): void {
    this.auth.logIn(this.username);
  }

}
