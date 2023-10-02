import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GestprodModule } from './gestprod/gestprod.module';
import { HomeadmModule } from './homeadm/homeadm.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GestprodModule,
    HomeadmModule
  ]
})
export class AdminModule { }
