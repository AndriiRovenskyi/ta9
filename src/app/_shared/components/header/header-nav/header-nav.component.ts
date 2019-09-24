import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Output() openMenu = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  activeMenu() {
    this.openMenu.emit();
  }

}
