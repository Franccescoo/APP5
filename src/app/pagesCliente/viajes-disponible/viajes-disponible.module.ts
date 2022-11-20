import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesDisponiblePageRoutingModule } from './viajes-disponible-routing.module';

import { ViajesDisponiblePage } from './viajes-disponible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesDisponiblePageRoutingModule
  ],
  declarations: [ViajesDisponiblePage]
})
export class ViajesDisponiblePageModule {}
