import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-chip',
  templateUrl: './history-chip.component.html',
  styleUrls: ['./history-chip.component.scss']
})
export class HistoryChipComponent implements OnInit {
  @Input() historyLinks;

  constructor() {
  }

  ngOnInit() {
  }

}
