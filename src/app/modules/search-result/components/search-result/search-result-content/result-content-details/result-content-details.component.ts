import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-content-details',
  templateUrl: './result-content-details.component.html',
  styleUrls: ['./result-content-details.component.scss']
})
export class ResultContentDetailsComponent implements OnInit {

  constructor(private rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.rout.params.subscribe(res => {
    });
  }

}
