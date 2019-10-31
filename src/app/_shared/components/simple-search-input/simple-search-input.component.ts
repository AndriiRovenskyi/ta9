import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-search-input',
    templateUrl: './simple-search-input.component.html',
    styleUrls: ['./simple-search-input.component.scss']
})
export class SimpleSearchInputComponent implements OnInit {
    searchValue = '';

    constructor() {
    }

    ngOnInit() {
    }

}
