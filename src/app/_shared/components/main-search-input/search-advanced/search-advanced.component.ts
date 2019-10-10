import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-search-advanced',
    templateUrl: './search-advanced.component.html',
    styleUrls: ['./search-advanced.component.scss']
})
export class SearchAdvancedComponent implements OnInit {
    @ViewChild('resultPicker') resultPicker;
    activeCategory = false;
    categories = [];

    constructor() {
        this.categories = [
            {
                id: 1,
                name: 'Creation Time',
                opened: true,
                options: ['date']
            },
            {
                id: 2,
                name: 'Last updated',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 3,
                name: 'Data source',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 4,
                name: 'Country',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 5,
                name: 'Tags',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 6,
                name: 'Language',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 7,
                name: 'Location',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            },
            {
                id: 8,
                name: 'Case',
                options: [
                    {checkName: 'All', isChecked: false},
                    {checkName: 'English', isChecked: false},
                    {checkName: 'French', isChecked: false},
                    {checkName: 'German', isChecked: false},
                    {checkName: 'Flemish', isChecked: false}],
                opened: false
            }

        ];
    }

    ngOnInit() {
    }

    onClickedOutside(category) {
        category.opened = false;

    }

    openCategory(category) {
        category.opened = !category.opened;

        if (category.name === 'Creation Time') {
            this.resultPicker.open();
        }
    }

    checkOption(option, category) {
        option.isChecked = !option.isChecked;
        if (option.checkName === 'All' && option.isChecked) {
            category.options.forEach(el => {
                el.isChecked = true;
            });
        }
    }

    clearAdvanced() {
        this.categories.forEach(category => {
            if (category.options.length > 1) category.options.forEach(option => {
                option.isChecked = false;
            });
        });
    }
}
