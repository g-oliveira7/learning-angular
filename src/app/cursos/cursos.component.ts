import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[] = [];
  tiposAlert: string[];
  pessoa = { nome: '', sobrenome: '' }

  constructor(private cursosService: CursosService, private modalService: NgbModal) {
    this.nomePortal = 'http://loiane.training'
    this.tiposAlert = ['success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light', 'dark']
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos()
  }

  handleClick(content: any) {
    this.modalService.open(content, {
      backdrop: 'static'
    })
  }

  addCurso(inputCurso: HTMLInputElement) {
    if (inputCurso.value) {
      const curso = inputCurso.value
      this.cursosService.addCurso(curso)
      inputCurso.value = ''
      inputCurso.focus()
    }
  }

  fullname() {
    return `${this.pessoa.nome} ${this.pessoa.sobrenome}`
  }
}
