import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-search-input',
  templateUrl: './main-search-input.component.html',
  styleUrls: ['./main-search-input.component.scss']
})
export class MainSearchInputComponent implements OnInit {
  @Output('openAdvanced') openAdvanced: EventEmitter<any> = new EventEmitter();
  @Input() isSearchResult;
  @Input() openAdvance;
  advanced = false;
  openDropFiles = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClickedOutside(event) {
    this.openDropFiles = false;
  }
}
