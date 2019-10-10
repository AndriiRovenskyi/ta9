import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchCardService} from '../../../../../core/services/search-card.service';

@Component({
    selector: 'app-result-content-details',
    templateUrl: './result-content-details.component.html',
    styleUrls: ['./result-content-details.component.scss']
})
export class ResultContentDetailsComponent implements OnInit {
    cardDetail = {};

    constructor(private rout: ActivatedRoute, private cardService: SearchCardService) {
    }

    ngOnInit() {
        this.rout.params.subscribe(res => {
            this.cardDetail = this.cardService.getCard(res.id)[0];
        });
    }
}
