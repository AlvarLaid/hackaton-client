import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  selected;
  users = ['Nelli', 'Alvar', 'Egert'];

  log(change) {
    console.log(this.selected);
  }

  ngOnInit() {
  }

}
