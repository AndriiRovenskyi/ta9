import {Component, OnInit} from '@angular/core';
import {SearchCardService} from '../../../../../../../core/services/search-card.service';


@Component({
    selector: 'app-result-card',
    templateUrl: './result-card.component.html',
    styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

    results: Array<any>;
    entityImg = '../../../../../../../../assets/images/entity-card-img.svg';

    constructor(searchCards: SearchCardService) {
        this.results = searchCards.getResultCards();
    }

    ngOnInit() {
    }

    changeSrc(event, src) {
        event.target.src = this.entityImg;
    }
}
