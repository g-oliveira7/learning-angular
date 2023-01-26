import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

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
    preco: 4400.90
  };

  cursos = ['Angular', 'Java', 'Python'];

  filtro: string = '';

  asyncValue = new  Promise((resolve, reject) => {
    setTimeout(() =>  resolve('Valor assíncrono depois de 3 segundos'), 3000);
  })

  asyncValue2 = new Observable(observer => {
    setTimeout(() => {
      observer.next('Valor assíncrono depois completo')
      observer.complete()
    }, 3000);
  })

  addCource(courseName: string): void {
    this.cursos.push(courseName)
  }

  getCursos() {
    if (this.cursos.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.cursos
    }

    return this.cursos.filter(curso => curso.indexOf(this.filtro) != -1)
  }
}
