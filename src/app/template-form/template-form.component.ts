import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };

  onSubmit(form: any) {
    // console.log(form.controls.email.valid);
    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map(res => res))
    .subscribe(data => console.log(data));
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  checkValidTouched(field: { valid: any; touched: any }) {
    return !field.valid && field.touched;
  }

  applyCssError(field: { valid: any; touched: any }) {
    return {
      'is-invalid': this.checkValidTouched(field),
      'is-valid': this.checkValidTouched(field),
    };
  }

  consultZipCode(zip: any, f: any) {
    zip = zip.replace(/\D/g, '');
    if (zip != '') {
      const validateZip = /^[0-9]{8}$/;
      if (validateZip.test(zip)) {
        this.resetFormData(f);
        this.http
          .get(`https://viacep.com.br/ws/${zip}/json`)
          .subscribe((data) => this.populateFormData(data, f));
      }
    }
  }

  populateFormData(data: any, form: any) {
    form.form.patchValue({
      endereco: {
        cep: data.cep,
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      },
    });
  }

  resetFormData(form: {
    form: {
      patchValue: (arg0: {
        endereco: {
          cep: null;
          complemento: null;
          rua: null;
          bairro: null;
          cidade: null;
          estado: null;
        };
      }) => void;
    };
  }) {
    form.form.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
