import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  valor: number = 0;
  
  @Output() mudouValor = new EventEmitter()

  increase() {
    this.valor++;
    this.mudouValor.emit({ valorAtual: this.valor })
  }

  decrease() {
    if (this.valor > 0) {
      this.valor--;
      this.mudouValor.emit({ valorAtual: this.valor })
    }
  }
}
