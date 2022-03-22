import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
