import {Component, OnInit} from '@angular/core';
import {SearchCardService} from '../../../../../../core/services/search-card.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
    selector: 'app-result-card',
    templateUrl: './result-card.component.html',
    styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
    results: Array<any>;
    entityImg = '../../../../../../../../assets/images/entity-card-img.svg';
    isBlurred = false;

    constructor(searchCards: SearchCardService, private router: Router) {
        this.results = searchCards.getResultCards();
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            if (event.url === '/items') this.isBlurred = false;
            if (event.url.includes('/items/details')) this.isBlurred = true;
        });
    }

    ngOnInit() {
    }

    changeSrc(event) {
        event.target.src = this.entityImg;
    }

    activeCard() {
        this.isBlurred = true;
    }

    closeCardDetails(event) {
        if (event.target.classList.contains('content-wrap'))  this.router.navigate(['/items']);
    }


}
