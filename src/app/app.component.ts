import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // nombre:string='SergIo Guil Gomez';
  // valor:number=1000;
  // obj={
  //   nombre:'Sergio'
  // }
  // mostrarNombre(){
  //   console.log(this.nombre);
  //   console.log(this.valor);
  //   console.log(this.obj);
  // }
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
