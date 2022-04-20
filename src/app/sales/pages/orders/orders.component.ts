import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})
export class OrdersComponent  {


  constructor() { }

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe [] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Deadpool',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.rojo
    }
  ]

  cambiarMayuscula() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ) {
    this.ordenarPor = valor;
  }
}
