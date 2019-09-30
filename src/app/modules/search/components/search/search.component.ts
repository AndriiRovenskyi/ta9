import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  advanced = false;
  historyLinks = [
    {
      name: 'Patrik'
    },
    {
      name: 'Melanie'
    },
    {
      name: 'Roberto'
    },
    {
      name: ' delganies'
    },
    {
      name: 'Robes 5151'
    },
    {
      name: 'Swq saf'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  openAdvanced(open) {
    this.advanced = open;
  }


}
