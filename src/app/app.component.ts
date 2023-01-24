import { AfterViewChecked, Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    ` a { cursor: pointer; } `
  ]
})
export class AppComponent {
  title = 'Hello World';
  currentAba: number = 0
  
  onMudouValor(event: Event) {
    console.log(event)
  }
}
