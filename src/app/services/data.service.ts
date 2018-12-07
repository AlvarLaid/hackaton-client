import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  categories = [
    {
      categoryName: 'JavaScript',
      skills: [
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: true,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
      ]
    },
    {
      categoryName: 'TypeScript',
      skills: [
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: true,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },{
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: true,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },{
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: false,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: false,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
      ]
    },
    {
      categoryName: 'Angular',
      skills: [
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: true,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: false,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
      ]
    },
    {
      categoryName: 'Machine Learning',
      skills: [
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: false,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: false,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
        {
          name: 'To be awesomest JavaScripter ever',
          why: 'Nortal needs awesome JavaScripters',
          completed: true,
          learningOutcomes: [
            'You are awesome',
            'You are a JavaScripter',
            'You are what Nortal needs'
          ],
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              },
              {
                heading: 'Second section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
          completed: false,
          learningMaterials: {
            chapters: [
              {
                heading: 'First section about awesome knowledge',
                paragraphs: [
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ]
              }
            ],
            videos: [
              'https://www.youtube.com/watch?v=LaIAHOSKHCQ'
            ]
          },
          assignment: 'To be the most awesomest JavaScripter ever, simply be awesome'
        },
      ]
    }
  ];

  getTotalNumberOfSkills() {
    let result = [];

    this.categories
      .forEach(category => {
        result = [...result, ...category.skills];
      });

    return result.length;
  }

  getTotalNumberOfSkillsCompleted() {
    let result = [];

    this.categories
      .forEach(category => {
        result = [...result, ...category.skills];
      });

    return result.filter(cat => cat.completed).length;
  }

  getCategories() {
    return this.categories;
  }
}
