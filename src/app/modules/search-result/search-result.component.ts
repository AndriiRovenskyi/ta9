import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

    showFilters = false;
    activeAdvanced = false;
    activeMultimedia = false;

    constructor(private router: Router) {
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.activeMultimedia = event.url === '/results/multimedia';
        });
    }

    ngOnInit() {
    }

}
