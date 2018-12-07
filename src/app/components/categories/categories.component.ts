import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  clicked = false;

  categories = [
    {categoryName: 'JavaScript', skillsAcquired: 25, skillsTotal: 50},
    {categoryName: 'TypeScript', skillsAcquired: 4, skillsTotal: 20},
    {categoryName: 'Angular', skillsAcquired: 40, skillsTotal: 55},
    {categoryName: 'postgreSQL', skillsAcquired: 2, skillsTotal: 33}
  ];

  skills = [
    {
      name: 'To be awesomest JavaScripter ever',
      why: 'Nortal needs awesome JavaScripters',
      learningOutcomes: [
        'You are awesome',
        'You are a JavaScripter',
        'You are what Nortal needs'
      ],
      learningMaterials: {
        chapters: [
          {
            heading: 'Esimene heading',
            paragraphs: [
              'See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik',
              'See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik.'
            ]
          },
          {
            heading: 'Teine heading',
            paragraphs: [
              'See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik',
              'See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik.'
            ]
          }
        ],
        video: 'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
      },
      assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
    },
    {
      name: 'To be awesomest JavaScripter ever',
      why: 'Nortal needs awesome JavaScripters',
      learningOutcomes: [
        'You are awesome',
        'You are a JavaScripter',
        'You are what Nortal needs'
      ],
      learningMaterials: {
        chapters: [
          {
            heading: 'Esimene heading',
            paragraphs: [
              'See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik. See on esimene lorem ipsum lõik',
              'See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik. See on teine lorem ipsum lõik.'
            ]
          }
        ],
        videos: [
          'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
        ]
      },
      assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
    },
  ];

  ngOnInit() {
  }

  click() {
    this.clicked = !this.clicked;
  }

}
