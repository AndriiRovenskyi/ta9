import {Component, Input, OnInit, ViewChild} from '@angular/core';


@Component({
    selector: 'app-search-advanced',
    templateUrl: './search-advanced.component.html',
    styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
    @ViewChild('picker') picker;
    activeCategory = false;
    categories = [
        {
            id: 1,
            name: 'Creation Time',
            opened: true,
            options: ['date']
        },
        {
            id: 2,
            name: 'Last updated',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 3,
            name: 'Data source',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 4,
            name: 'Country',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 5,
            name: 'Tags',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 6,
            name: 'Language',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 7,
            name: 'Location',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        },
        {
            id: 8,
            name: 'Case',
            options: ['All', 'English', 'French', 'German', 'Flemish'],
            opened: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onClickedOutside(category) {
        category.opened = false;

    }

    openCategory(category) {
        category.opened = !category.opened;

        if (category.name === 'Creation Time') {
            this.picker.open();
        }
    }


}
