import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  templateUrl: './ngclass-directive.component.html',
  styleUrls: ['./ngclass-directive.component.scss']
})
export class NgclassDirectiveComponent {
  fill = false

  onClick() {
    this.fill = !this.fill
  }
}
