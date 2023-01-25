import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    OutputPropertyComponent,
    LifecycleHookComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
