import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  menuExpanded: boolean = false;

  constructor() { }

  toggleMenu = (option:boolean) => {
    this.menuExpanded = option;
  }

}
