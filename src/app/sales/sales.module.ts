import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrdersComponent } from './pages/orders/orders.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';





@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrdersComponent,
    MayusculasPipe,
    OrdenarPipe,
    VuelaPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule, 
    PrimeNgModule
  ]
})
export class SalesModule { }
