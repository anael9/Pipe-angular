import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  nameLower: string = 'anael';
  nameUpper: string = 'ANAEL';
  nameTittle: string = 'anael hernandez'

  fecha: Date = new Date();
}
