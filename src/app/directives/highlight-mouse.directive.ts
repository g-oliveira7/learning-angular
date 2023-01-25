import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') textColor: string = '';

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'blue'
    this.textColor = 'white'
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'white'
    this.textColor = 'black'
  }
}
