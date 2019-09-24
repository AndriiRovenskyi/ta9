import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-search-input',
  templateUrl: './main-search-input.component.html',
  styleUrls: ['./main-search-input.component.scss']
})
export class MainSearchInputComponent implements OnInit {
  @Output('openAdvanced') openAdvanced: EventEmitter<any> = new EventEmitter();
  @Input() isSearchResult;
  advanced = false;
  openDropFiles = false;
  searchResult = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickedOutside(event) {
    this.openDropFiles = false;
  }

}