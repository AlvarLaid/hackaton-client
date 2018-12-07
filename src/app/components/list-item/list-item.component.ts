import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }
  @Input() categoryName = 'JavaScript';
  @Input() skillsAcquired = 30;
  @Input() totalSkills = 60;
  @Input() hasCheckbox = false;

  ngOnInit() {
  }

  getCompletionPercentage() {
    return this.skillsAcquired / this.totalSkills * 100;
  }

}
