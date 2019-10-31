import {Component, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header-left',
    templateUrl: './header-left.component.html',
    styleUrls: ['./header-left.component.scss']
})
export class HeaderLeftComponent implements OnInit {
    activeMenu = false;

    constructor() {
    }

    ngOnInit() {
    }
}
