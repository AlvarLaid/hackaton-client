import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private auth: AuthService) { }
  @Input() skill;
  expanded;

  completed() { }

  isAdmin() {
    return this.auth.username === 'admin';
  }

  expand() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    console.log('i have skilled');
  }


}
