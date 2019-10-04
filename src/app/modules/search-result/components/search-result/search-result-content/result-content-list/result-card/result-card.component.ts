import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-result-card',
    templateUrl: './result-card.component.html',
    styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

    results: Array<any>;
    entityImg = '../../../../../../../../assets/images/entity-card-img.svg';

    constructor() {
        this.results = [
            {
                id: 1,
                type: 'Entity - Person',
                title: 'Patrick Gustafsson',
                status: 'Officer',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: ''
            },
            {
                id: 2,
                type: 'Entity - Person',
                title: 'RICHTER BO PATRICK',
                status: 'Intermédiaire',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/patrick.png'
            },
            {
                id: 3,
                type: 'Document',
                title: 'Whither Trade Policies in Southeast Asia',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-word.svg'
            },
            {
                id: 4,
                type: 'Document',
                title: 'Information Sharing Environment (ISE) - Suspicious Activity Reporting (SAR) Evaluation Environment',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-excel.svg'
            },
            {
                id: 5,
                type: 'Document',
                title: 'Information Sharing Environment (ISE)',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-powerPoint.svg'
            },
            {
                id: 6,
                type: 'Document',
                title: 'Information Sharing Environment (ISE)',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-doc.svg'
            },
            {
                id: 7,
                type: 'Multimedia - Image',
                title: 'A suspicious address.PNG',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/multimedia-pic.png'
            },
            {
                id: 8,
                type: 'Multimedia - Video',
                title: 'PATRICK_Interview$01.MP4',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-video.svg'
            },
            {
                id: 9,
                type: 'Multimedia - Audio',
                title: 'AUG-18-Questioning-ENG.WAV',
                openCardTools: false,
                isOpenedDetails: false,
                imgSrc: '../../../../../../../../assets/images/card-img-audio.svg'
            },
        ];
    }

    ngOnInit() {
    }

    changeSrc(event, src) {
        event.target.src = this.entityImg;
    }
}
