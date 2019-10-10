import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-details-header-top',
    templateUrl: './details-header-top.component.html',
    styleUrls: ['./details-header-top.component.scss']
})
export class DetailsHeaderTopComponent implements OnInit {
    headerLinks = [
        {
            linkName: 'Preview',
            imgSrc: '../../../../../../../assets/icons/content-details-preview-btn.svg',
            isActive: true
        },
        {
            linkName: 'Link Analisys',
            imgSrc: '../../../../../../../assets/icons/content-details-preview-btn.svg',
            isActive: false
        },
        {
            linkName: 'Annotations',
            imgSrc: '../../../../../../../assets/icons/content-details-preview-btn.svg',
            isActive: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    activeLink(link) {
        this.headerLinks.forEach(el => el.isActive = false);
        link.isActive = true;
    }
}
