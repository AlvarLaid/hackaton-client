import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth: AuthService, private data: DataService) { }
  username = this.auth.username;

  getTotal() {
    return this.data.getTotalNumberOfSkills();
  }

  getAcq() {
    return this.data.getTotalNumberOfSkillsCompleted();
  }

  ngOnInit() { }

  logOut() {
    this.auth.logOut();
  }

}


