import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  //i18select
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18plural
  clientes: string[] = ['maria', 'there', 'mario', 'anael','mono']
  clienteMapa = {
    '=0': 'No tenemos clientes esperando.',
    '=1': 'tenemos # cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarNombre() {
    this.nombre = 'Fernanda';
    this.genero='femenino';
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }

  //keyvaluepipe
  persona = {
    nombre: 'fernando',
    edad: 26,
    direccion: 'otawa, canada'
  }

  //jsonPipe
  heroe = [
    {
      nombre: 'vegeta',
      poder: 150
    }
    ,{
      nombre: 'goku',
      poder: 1500
    }
    ,
    {
      nombre: 'deadpool',
      poder: 15000
    }
  ]

  //async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de la promesa');
    }, 3500);
  })
}
