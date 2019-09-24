import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-chip',
  templateUrl: './history-chip.component.html',
  styleUrls: ['./history-chip.component.scss']
})
export class HistoryChipComponent implements OnInit {
  historyLinks = [{
    name: 'Patrik'
  },
    {
      name: 'Melanie'
    },
    {
      name: 'Roberto delganies'
    },
    {
      name: 'Roberto delganies'
    },
    {
      name: 'Roberto delganies'
    },
    {
      name: 'Roberto delganies'
    },
    {
      name: 'Roberto delganies'
    },
    {
      name: 'Roberto delganies'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
