import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form: any) {
    // console.log(form.controls.email.valid);
    console.log(this.usuario);

  }

  constructor() { }

  ngOnInit(): void {
  }

  checkValidTouched(campo: { valid: any; touched: any; }) {
    return !campo.valid && campo.touched;
  }

  applyCssError(campo: { valid: any; touched: any; }) {
    return {
      'is-invalid': this.checkValidTouched(campo),
      'is-valid': this.checkValidTouched(campo)
    }
  }

}
