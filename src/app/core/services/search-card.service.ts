import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchCardService {
    searchResult = [
        {
            id: 1,
            type: 'Entity - Person',
            title: 'Patrick Gustafsson',
            detailsText: 'Patrik Gustafsson ...Patrick Gustafsson, 7DF2852C060292D9AF58F5BD1E6B5540, , 12118093,',
            status: 'Officer',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: ''
        },
        {
            id: 2,
            type: 'Entity - Person',
            title: 'RICHTER BO PATRICK',
            detailsText: 'RICHTER BO PATRICK ...RICHTER BO PATRICK, , , 22018435,',
            status: 'Intermédiaire',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/patrick.png'
        },
        {
            id: 3,
            type: 'Document',
            title: 'Whither Trade Policies in Southeast Asia',
            detailsText: 'sallytradepolicies.doc...Whither Trade Policies in Southeast Asia...PAGE 1 Whither Trade Policies in Southeast Asia? The Wider Asian and Patrick context Razeen Sally and...',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-word.svg'
        },
        {
            id: 4,
            type: 'Document',
            title: 'Information Sharing Environment (ISE) - Suspicious Activity Reporting (SAR) Evaluation Environment',
            detailsText: 'Police; Patrick Ladines, Washington State Patrol; Lloyd Michaud, Utah Department of Public Safety; Ted',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-excel.svg'
        },
        {
            id: 5,
            type: 'Document',
            title: 'Information Sharing Environment (ISE)',
            detailsText: 'Police; Ladines, Washington State Patrol; Lloyd Patrick Michaud, Utah Department of Public Safety; Ted',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-powerPoint.svg'
        },
        {
            id: 6,
            type: 'Document',
            title: 'Information Sharing Environment (ISE)',
            detailsText: 'Police; Ladines, Washington State Patrol; Lloyd Patrick Michaud, Utah Department of Public Safety; Ted',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-doc.svg'
        },
        {
            id: 7,
            type: 'Multimedia - Image',
            title: 'A suspicious address.PNG',
            detailsText: 'A suspicious address.PNG...Patrik us address.PNG',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/multimedia-pic.png'
        },
        {
            id: 8,
            type: 'Multimedia - Video',
            title: 'PATRICK_Interview$01.MP4',
            detailsText: 'RICHTER BO PATRICK ...RICHTER BO PATRICK, , , 22018435,',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-video.svg'
        },
        {
            id: 9,
            type: 'Multimedia - Audio',
            title: 'AUG-18-Questioning-ENG.WAV',
            detailsText: 'An interrogation transcript of Patrick Aug-18.ENG, investigation',
            openCardTools: false,
            isOpenedDetails: false,
            imgSrc: '../../../../../../../../assets/images/card-img-audio.svg'
        }
    ];

    constructor() {
    }

    getCard(id) {
        return this.searchResult.filter(res => {
            return res.id == id;
        });
    }

    getResultCards() {
        return this.searchResult;
    }
}
