import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  advanced = false;

  constructor() {
  }

  ngOnInit() {
  }

  openAdvanced(open) {
    this.advanced = open;
  }


}
