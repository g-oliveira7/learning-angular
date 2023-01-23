import { CursosService } from './cursos.service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];
  tiposAlert: string[];
  pessoa = {nome: '', sobrenome: ''}

  constructor(private cursosService: CursosService,
    private modalService: NgbModal) {
    this.nomePortal = 'http://loiane.training'
    this.cursos = this.cursosService.getCursos()
    this.tiposAlert = ['success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light', 'dark']
  }

  handleClick(content: any) {
    this.modalService.open(content, {
      backdrop: 'static'
    })
  }

  fullname() {
    return `${this.pessoa.nome} ${this.pessoa.sobrenome}`
  }
}
