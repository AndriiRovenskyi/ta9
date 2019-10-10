import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-all-filters',
    templateUrl: './all-filters.component.html',
    styleUrls: ['./all-filters.component.scss']
})
export class AllFiltersComponent implements OnInit {
    types = [];
    amountSelected = 0;
    sortByHighLow = [
        '../../../../../../../assets/icons/hi-lo-off.svg',
        '../../../../assets/icons/sort-high-up.svg',
        '../../../../../../../assets/icons/hi-lo-down.svg'
    ];
    sortedByHighLow = 0;
    sortByAlphabet = [
        '../../../../../../../assets/icons/a-z-off.svg',
        '../../../../../../../assets/icons/z-a-up.svg',
        '../../../../../../../assets/icons/sort-a-z-down.svg',
    ];
    sortedAlphabet = 0;

    constructor(public dialogRef: MatDialogRef<AllFiltersComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit() {
        this.types = this.data;
        this.amountSelected = this.data.filter(el => el.isChecked === true).length;
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    sortByHighLowFn() {
        this.sortedByHighLow++;
        if (this.sortedByHighLow >= this.sortByHighLow.length) this.sortedByHighLow = 0;
    }

    sortByAlpahbetFn() {
        this.sortedAlphabet++;
        if (this.sortedAlphabet >= this.sortByAlphabet.length) this.sortedAlphabet = 0;
    }

    checkFilter(type) {
        type.isChecked = !type.isChecked;
        if (type.checkName === 'All' && type.isChecked === true) {
            this.data.forEach(el => {
                el.isChecked = true;
            });
        }
        this.amountSelected = this.data.filter(el => el.isChecked === true).length;
    }
}
