import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-details-info',
  templateUrl: './content-details-info.component.html',
  styleUrls: ['./content-details-info.component.scss']
})
export class ContentDetailsInfoComponent implements OnInit {
  detailsInfo = [
    {
      type: 'ID Number',
      description: '976066176'
    },
    {
      type: 'Name',
      description: 'Patrick Gustafsson'
    },
    {
      type: 'NickName',
      description: 'Pato'
    },
    {
      type: 'Gender',
      description: 'Male'
    },
    {
      type: 'Date Of Birth',
      description: '5/14/70'
    },
    {
      type: 'Age',
      description: '49'
    },
    {
      type: 'Material Status',
      description: 'Single'
    },
    {
      type: 'Profession',
      description: ''
    },
    {
      type: 'Eye Color',
      description: ''
    },
    {
      type: 'Height',
      description: ''
    },
    {
      type: 'Criminal Record',
      description: ''
    },
    {
      type: 'Military Service',
      description: ''
    },
    {
      type: 'Address',
      description: '2232 Valentine Ave Bronx. NY 104157'
    },
    {
      type: 'Country Codes',
      description: 'US'
    }
  ];
  photos = [
    {
      src: '../../../../../../../../assets/images/details-info-pic.png',
      isActive: true
    },
    {
      src: '../../../../../../../../assets/images/details-info-pic1.png',
      isActive: false
    },
    {
      src: '../../../../../../../../assets/images/details-info-pic2.png',
      isActive: false
    },
    {
      src: '../../../../../../../../assets/images/details-info-pic3.png',
      isActive: false
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  changePhoto(photo) {
    this.photos.forEach((el, index) => {
      el.isActive = false;

    });
    photo.isActive = true;

  }
}
