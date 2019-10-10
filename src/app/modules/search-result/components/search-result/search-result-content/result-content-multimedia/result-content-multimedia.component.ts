import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-result-content-multimedia',
    templateUrl: './result-content-multimedia.component.html',
    styleUrls: ['./result-content-multimedia.component.scss']
})
export class ResultContentMultimediaComponent implements OnInit {
    isActive = false;
    imgArr = [
        {
            src: '../../../../../../../assets/images/img1.jpg',
            isActiveCard: true
        },
        {
            src: '../../../../../../../assets/images/img2.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img1.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img2.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img1.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img2.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img1.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img2.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img1.jpg',
            isActiveCard: false
        },
        {
            src: '../../../../../../../assets/images/img2.jpg',
            isActiveCard: false
        }
    ];
    imgSrc = '../../../../../../../assets/images/img1.jpg';

    constructor() {
    }

    ngOnInit() {
    }

    changeMultimedia(src) {
        this.imgSrc = src;
        this.imgArr.forEach((el) => {
            el.isActiveCard = false;
        });
    }
}
