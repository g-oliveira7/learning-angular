import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];
  tiposAlert: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training'
    this.cursos = this.cursosService.getCursos()
    this.tiposAlert = ['success', 'info', 'warning', 'danger', 'primary', 'secondary', 'light', 'dark']
  }
}
