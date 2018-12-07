import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private auth: AuthService, private data: DataService) { }
  @Input() skill;
  expanded;

  completed() { }

  isAdmin() {
    return this.auth.username === 'admin';
  }

  checked(assignemnt) {
    this.data.completedAssignments.push(assignemnt);
  }

  expand() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    console.log('i have skilled');
  }


}
