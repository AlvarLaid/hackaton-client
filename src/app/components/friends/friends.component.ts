import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private auth: AuthService) { 

  }
  fdone1 = 25;
  ftotal1= 50;
  fname1 = "Alvar";
  fdone2 = 25;
  ftotal2= 50;
  fname2 = "Nelli";
  fdone3 = 25;
  ftotal3= 50;
  fname3 = "Egert";

  ngOnInit() {
  }

}

