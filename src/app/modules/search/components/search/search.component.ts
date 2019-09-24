import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  openAdvanced = false;
  openDropFiles = false;

  constructor() {
  }

  ngOnInit() {
  }

}
