import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower:string='sergio';
  nombreUpper:string='SERGIO';
  nombreCompleto:string='sErgio GuIl GoMez'

  fecha:Date = new Date(); // el día de hoy
  
}
