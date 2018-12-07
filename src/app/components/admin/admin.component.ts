import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }
  selected;
  users = ['Nelli', 'Alvar', 'Egert'];
  completedAssignments = [];

  log(change) {
    console.log(this.selected);
    // this.data.categories = this.data[this.selected];
    this.router.navigate(['categories']);
  }


  completed() {
    console.log(this.data.completedAssignments);
    return this.data.completedAssignments;
  }

  ngOnInit() {
    this.completedAssignments = this.data.completedAssignments;
  }

}
