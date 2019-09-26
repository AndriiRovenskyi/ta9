import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-result-filter',
  templateUrl: './search-result-filter.component.html',
  styleUrls: ['./search-result-filter.component.scss']
})
export class SearchResultFilterComponent implements OnInit {
  filters = [
    {
      name: 'Type',
      types: [
        'All',
        'Entities',
        'Documents',
        'Multimedia',
        'Data Models'
      ],
      opened: true
    },
    {
      name: 'Tags',
      types: [
        'All',
        'Officier',
        'Non Utilize',
        'Intermediatre',
        'Criminal'
      ],
      opened: false
    },
    {
      name: 'Type',
      types: [
        'All',
        'Entities',
        'Documents',
        'Multimedia',
        'Data Models'
      ],
      opened: true
    },
    {
      name: 'Type',
      types: [
        'All',
        'Entities',
        'Documents',
        'Multimedia',
        'Data Models'
      ],
      opened: true
    },
    {
      name: 'Type',
      types: [
        'All',
        'Entities',
        'Documents',
        'Multimedia',
        'Data Models'
      ],
      opened: true
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
