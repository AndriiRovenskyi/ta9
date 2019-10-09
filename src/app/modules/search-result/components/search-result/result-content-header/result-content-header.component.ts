import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-result-content-header',
    templateUrl: './result-content-header.component.html',
    styleUrls: ['./result-content-header.component.scss']
})
export class ResultContentHeaderComponent implements OnInit {
    @Input() showFilters: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
