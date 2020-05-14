import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  @Input() expanded: boolean = false;
  @Output() changeMenu = new EventEmitter<boolean>();

  constructor() { }

  closeMenu = () => {
    this.changeMenu.emit(false);
  }

}
