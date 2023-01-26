import { CursosModule } from './cursos/cursos.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt' 
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import { CustomizedDirectivesComponent } from './customized-directives/customized-directives.component';
import { YellowBackgroundDirective } from './directives/yellow-background.directive';
import { HighlightMouseDirective} from './directives/highlight-mouse.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { NgElseDirective } from './directives/ng-else.directive';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    OutputPropertyComponent,
    LifecycleHookComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent,
    CustomizedDirectivesComponent,
    YellowBackgroundDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    PipesExamplesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    CursosModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
