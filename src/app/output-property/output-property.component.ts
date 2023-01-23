import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  // valor: number = 0;
  
  @Output() mudouValor = new EventEmitter()

  @ViewChild('displayValue') inputValorDisplay!: ElementRef

  increase() {
    this.inputValorDisplay.nativeElement.value++
    this.mudouValor.emit({ valorAtual: this.inputValorDisplay.nativeElement.value })
  }

  decrease() {
    if (this.inputValorDisplay.nativeElement.value > 0) {
      this.inputValorDisplay.nativeElement.value--;
      this.mudouValor.emit({ valorAtual: this.inputValorDisplay.nativeElement.value })
    }
  }
}
