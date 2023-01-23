import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    OutputPropertyComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
