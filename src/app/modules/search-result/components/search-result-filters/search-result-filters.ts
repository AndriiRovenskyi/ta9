import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-search-result-filters',
    templateUrl: './search-result-filters.html',
    styleUrls: ['./search-result-filters.scss']
})

export class SearchResultFiltersComponent implements OnInit {
    @Input() activeMultimedia: boolean;
    commonFilters = [
        {
            name: 'Type',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Entities', isChecked: false},
                {checkName: 'Documents', isChecked: false},
                {checkName: 'Multimedia', isChecked: false},
                {checkName: 'Data Models', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Tags',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Officier', isChecked: false},
                {checkName: 'Non Utilize', isChecked: false},
                {checkName: 'Intermédiaire', isChecked: false},
                {checkName: 'Criminal', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Location',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Los Angeles', isChecked: false},
                {checkName: 'Berlin', isChecked: false},
                {checkName: 'Cann', isChecked: false},
                {checkName: 'Paris', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Language',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'English', isChecked: false},
                {checkName: 'French', isChecked: false},
                {checkName: 'German', isChecked: false},
                {checkName: 'Arabic', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Data Source',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Accurate Location', isChecked: false},
                {checkName: 'ADINT', isChecked: false},
                {checkName: 'OSINT', isChecked: false},
                {checkName: 'WIFI Interception', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        }
    ];
    multimediaFilters = [
        {
            name: 'Type',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Photo', isChecked: false},
                {checkName: 'Video', isChecked: false},
                {checkName: 'Audio', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Object Type',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Van', isChecked: false},
                {checkName: 'Person', isChecked: false},
                {checkName: 'Road', isChecked: false},
                {checkName: 'Car', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Entities',
            types: [
                {checkName: 'All', isChecked: false},
                {checkName: 'Dave Pato', isChecked: false},
                {checkName: 'Patrick Williams', isChecked: false},
                {checkName: 'Patrick Dourgan', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        },
        {
            name: 'Data Source',
            types: [
                {checkName: 'Accurate Location', isChecked: false},
                {checkName: 'ADINT', isChecked: false},
                {checkName: 'OSINT', isChecked: false},
                {checkName: 'Orange', isChecked: false}
            ],
            opened: true,
            sortByHighLow: [
                '../../../../../../../assets/icons/hi-lo-off.svg',
                '../../../../../../../assets/icons/sort-high-up.svg',
                '../../../../../../../assets/icons/hi-lo-down.svg'
            ],
            sortedByHighLow: 0,
            sortByAlphabet: [
                '../../../../../../../assets/icons/a-z-off.svg',
                '../../../../../../../assets/icons/z-a-up.svg',
                '../../../../../../../assets/icons/sort-a-z-down.svg',
            ],
            sortedAlphabet: 0
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    clearFilters() {
        this.commonFilters.forEach(filter => {
            filter.types.forEach(type => {
                type.isChecked = false;
            });
        });
        this.multimediaFilters.forEach(filter => {
            filter.types.forEach(type => {
                type.isChecked = false;
            });
        });
    }

    getFilters() {
        return this.activeMultimedia ? this.multimediaFilters : this.commonFilters;
    }

}
