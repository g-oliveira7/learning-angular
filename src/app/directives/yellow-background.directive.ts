import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[yellowBackground]' // Somente tags `p`
})
export class YellowBackgroundDirective {

  constructor(private elementRef: ElementRef,
    private render: Renderer2) {
    const nativeElement = this.elementRef.nativeElement // (vulnerabilidade) Não manipular diretamente o nativeElement

    this.render.setStyle(nativeElement, 'background-color', 'yellow') // recomendação do angular, utilizar o Renderer
  }
}
