import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-details-header-bottom',
    templateUrl: './details-header-bottom.component.html',
    styleUrls: ['./details-header-bottom.component.scss']
})
export class DetailsHeaderBottomComponent implements OnInit {
    @Input() cardDetail;
    headerLinks = [
        {linkName: 'Main Details', isActive: true},
        {linkName: 'Communication', isActive: false},
        {linkName: 'Additional', isActive: false},
        {linkName: 'Images', isActive: false},
        {linkName: 'Passport Information', isActive: false},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    activeLink(link) {
        this.headerLinks.forEach(el => {
            el.isActive = false;
        });
        link.isActive = true;
    }
}
