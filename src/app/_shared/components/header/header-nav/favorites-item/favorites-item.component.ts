import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-favorites-item',
    templateUrl: './favorites-item.component.html',
    styleUrls: ['./favorites-item.component.scss']
})
export class FavoritesItemComponent implements OnInit {
    favItems = [];

    constructor() {
        this.favItems = [
            {
                type: 'Dashboard',
                title: '',
                background: 'red',
                icon: ''
            },
            {
                type: 'Data Models',
                title: 'CDR',
                background: 'blue',
                icon: ''
            },
            {
                type: 'Data Models',
                title: 'Subscirbers',
                background: 'blue',
                icon: ''
            },
            {
                type: 'Entities',
                title: 'Person',
                background: 'orange',
                icon: ''
            },
            {
                type: 'Forms',
                title: 'Traffic Tickets',
                background: 'green',
                icon: ''
            }
        ];
    }

    ngOnInit() {
    }

}
