import {Component, Input, OnInit} from '@angular/core';
import {AllFiltersComponent} from '../../../../../../_shared/dialogs/all-filters/all-filters.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-aside-filter',
    templateUrl: './aside-filter.html',
    styleUrls: ['./aside-filter.scss']
})
export class AsideFilterComponent implements OnInit {
    @Input() filters: any;

    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
    }

    sortByHighLowFn(filter) {
        filter.sortedByHighLow++;
        if (filter.sortedByHighLow >= filter.sortByHighLow.length) filter.sortedByHighLow = 0;
    }

    sortByAlpahbetFn(filter) {
        filter.sortedAlphabet++;
        if (filter.sortedAlphabet >= filter.sortByAlphabet.length) filter.sortedAlphabet = 0;
    }

    checkFilter(type, filter) {
        type.isChecked = !type.isChecked;
        if (type.checkName === 'All' && type.isChecked === true) {
            filter.types.forEach(el => {
                el.isChecked = true;
            });
        }
    }

    isFiltersOpened(filter) {
        filter.opened = !filter.opened;
        filter.types.forEach(el => {
            el.isChecked = false;
        });
    }

    openAllFilters(filters) {
        const dialogRef = this.dialog.open(AllFiltersComponent, {
            width: 'auto',
            data: filters
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
