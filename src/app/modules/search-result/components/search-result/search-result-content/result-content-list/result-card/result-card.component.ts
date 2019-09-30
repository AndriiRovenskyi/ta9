import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  results: Array<any>;

  constructor() {
    this.results = [
      {
        id: 1,
        title: 'Patrick Gustafsson',
        openCardTools: false,
        isOpenedDetails: false
      },
      {
        id: 2,
        title: 'RICHTER BO PATRICK',
        openCardTools: false,
        isOpenedDetails: false
      },
      {
        id: 3,
        title: 'Whither Trade Policies in Southeast Asia',
        openCardTools: false,
        isOpenedDetails: false
      },
      {
        id: 4,
        title: 'Information Sharing Environment (ISE) - Suspicious Activity Reporting (SAR) Evaluation Environment',
        openCardTools: false,
        isOpenedDetails: false
      },
      {
        id: 5,
        title: 'Information Sharing Environment (ISE)',
        openCardTools: false,
        isOpenedDetails: false
      },
    ];
  }

  ngOnInit() {
  }

}
