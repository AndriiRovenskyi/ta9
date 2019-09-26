import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-content-multimedia',
  templateUrl: './result-content-multimedia.component.html',
  styleUrls: ['./result-content-multimedia.component.scss']
})
export class ResultContentMultimediaComponent implements OnInit {
  imgArr = [
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'},
    {src: '../../../../../../../assets/images/img1.jpg'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
