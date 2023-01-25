import { Directive, HostListener, HostBinding, Input, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  
  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.customColor
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = this.defaultColor
  }
  
  @Input() defaultColor: string = 'white';
  @Input() customColor: string = 'blue';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
  }
}
