import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.scss']
})
export class PipesExamplesComponent {
  livro: any = {
    nome: 'O poder do hábito',
    editora: 'Objetiva; 1ª edição',
    data: new Date(2012, 8, 24),
    paginas: 408,
    avaliacao: 4.81234,
    preco: 44.90
  };
}
