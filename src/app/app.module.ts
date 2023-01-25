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
import { CustomizedDirectivesComponent } from './customized-directives/customized-directives.component';
import { YellowBackgroundDirective } from './directives/yellow-background.directive';
import { HighlightMouseDirective} from './directives/highlight-mouse.directive';
import { HighlightDirective } from './directives/highlight.directive';

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
    HighlightDirective
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
