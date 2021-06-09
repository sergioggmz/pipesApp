import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
 nombre:string = 'Fernando'
  genero:string='masculino'
  invitacionMapa={ //selecciona una opción que coincide con el argumento que se le pasa al pipe.
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }
  //i18nPlural
  clientes:string[]=['Jacinta','Maria','Francisco','Pedro','Jacinto']
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos # clientes esperando.'
  }
  cambiarCliente(){
    this.nombre='Melissa',
    this.genero='femenino'
  }
  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValue Pipe

  persona={
    nombre:'Sergio',
    edad:24,
    direccion:'Jaén, España'
  }

  //JsonPipe
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false,
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  //Async Pipe

  miObservable = interval(5000)
  valorPromesa= new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  })
}
