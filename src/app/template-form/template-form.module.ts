import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CampoControlErrorComponent } from './../campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
