import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.scss']
})
export class NgstyleDirectiveComponent {
  size = 1;
  maxSize = 5;

  increaseSize() {
    if (this.size < this.maxSize) {
      this.size++
    }
  }

  decreaseSize() {
    if (this.size > 1) {
      this.size--
    }
  }
}
