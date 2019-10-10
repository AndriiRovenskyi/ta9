import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-main-search-input',
    templateUrl: './main-search-input.component.html',
    styleUrls: ['./main-search-input.component.scss']
})
export class MainSearchInputComponent implements OnInit {
    @Output('openAdvanced') openAdvanced: EventEmitter<any> = new EventEmitter();
    @Output('showFilters') showFilters: EventEmitter<any> = new EventEmitter();
    @Output('openedAdvanced') openedAdvanced: EventEmitter<any> = new EventEmitter();
    @Input() isSearchResult;
    @Input() openAdvance;
    advanced = false;
    openDropFiles = false;
    closeFilters = false;
    searchValue = '';

    constructor() {
    }

    ngOnInit() {
    }

    openFilters() {
        this.showFilters.emit();
        this.closeFilters = !this.closeFilters;
    }

    onClickedOutside() {
        this.openDropFiles = false;
    }
}
