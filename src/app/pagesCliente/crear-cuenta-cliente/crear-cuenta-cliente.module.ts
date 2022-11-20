import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCuentaClientePageRoutingModule } from './crear-cuenta-cliente-routing.module';

import { CrearCuentaClientePage } from './crear-cuenta-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCuentaClientePageRoutingModule
  ],
  declarations: [CrearCuentaClientePage]
})
export class CrearCuentaClientePageModule {}
