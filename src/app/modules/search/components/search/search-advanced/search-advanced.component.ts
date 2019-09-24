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
      opened: false
    },
    {
      name: 'Last updated',
      opened: false
    },
    {
      name: 'Data source',
      opened: false
    },
    {
      name: 'Country',
      opened: false
    },
    {
      name: 'Tags',
      opened: false
    },
    {
      name: 'Language'
      , opened: false
    },
    {
      name: 'Location',
      opened: false
    },
    {
      name: 'Case',
      opened: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
