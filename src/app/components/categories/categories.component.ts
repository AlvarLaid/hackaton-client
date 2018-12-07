import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private data: DataService, private http: HttpClient) { }

  clicked = false;

  categories;

  ngOnInit() {
    this.categories = this.data.categories;
    this.http.get('https://xmas-hackathon.herokuapp.com/user/0').subscribe((val: any) => {
      console.log(val);
      console.log(JSON.parse(val.data));
    });
  }

  click() {
    this.clicked = !this.clicked;
  }

  calculateAcqSkills(skills: any[]) {
    return skills
      .filter((skill) => skill.completed)
      .length;
  }

}
