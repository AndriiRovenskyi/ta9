import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-result-footer',
    templateUrl: './search-result-footer.component.html',
    styleUrls: ['./search-result-footer.component.scss']
})
export class SearchResultFooterComponent implements OnInit {
    resultNumber = [20, 50, 100];
    isOpenedNumber = false;
    currentNumber = 20;

    constructor() {
    }

    ngOnInit() {
    }

}
