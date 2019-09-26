import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  results = [
    {
      title: 'Patrick Gustafsson',
      showCardDetail: false
    },
    {
      title: 'RICHTER BO PATRICK',
      showCardDetail: false
    },
    {
      title: 'Whither Trade Policies in Southeast Asia',
      showCardDetail: false
    },
    {
      title: 'Information Sharing Environment (ISE) - Suspicious Activity Reporting (SAR) Evaluation Environment',
      showCardDetail: false
    },
    {
      title: 'Information Sharing Environment (ISE)',
      showCardDetail: false
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  closeCardDetails(close) {

  }
}
