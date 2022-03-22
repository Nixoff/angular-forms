import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-error',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.scss']
})
export class CampoControlErrorComponent implements OnInit {

@Input() showError: boolean | undefined;
@Input() msgError: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
