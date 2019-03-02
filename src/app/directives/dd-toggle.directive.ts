import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDdToggle]'
})
export class DdToggleDirective {

  constructor() { }
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
