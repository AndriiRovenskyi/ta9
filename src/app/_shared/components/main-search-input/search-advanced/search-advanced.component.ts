import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
  activeCategory = false;
  categories = [
    {
      name: 'Creation Time',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Last updated',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Data source',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Country',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Tags',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Language',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Location',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    },
    {
      name: 'Case',
      options: ['All', 'English', 'French', 'German', 'Flemish'],
      opened: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onClickedOutside(category) {
    category.opened = false;

  }

  openCategory(category) {
    category.opened = !category.opened;
  }


}
