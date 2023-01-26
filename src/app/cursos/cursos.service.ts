import { Injectable } from '@angular/core';

@Injectable() // or @Injectable({ providedIn: 'root' })
export class CursosService {

  private cursos = ['Java', 'Ext JS', 'Angular'];

  getCursos(): string[] {
    return this.cursos
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
  }
}
