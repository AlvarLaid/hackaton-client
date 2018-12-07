import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthService) { }
  done = 5;
  total = 50;
  username = this.auth.username;

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }

}


