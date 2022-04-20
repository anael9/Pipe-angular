import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
     this.items = [
            {
                label: 'Pipes de angular',
                icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y Fechas',
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                    },
                    {
                        label: 'Numbers',
                        icon: 'pi pi-dollar',
                        routerLink: 'numbers'
                    },
                    {
                        label: 'Not Commons',
                        icon: 'pi pi-dollar',
                        routerLink: 'not-commons'
                    }
                ]
            },
            {
                label: 'custom pipes',
                icon: 'pi pi-cog',
                routerLink: 'orders'
            }
        ];
  }

}
