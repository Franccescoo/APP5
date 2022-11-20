import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarViajePageRoutingModule } from './finalizar-viaje-routing.module';

import { FinalizarViajePage } from './finalizar-viaje.page';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizarViajePageRoutingModule,
    MatIconModule
  ],
  declarations: [FinalizarViajePage]
})
export class FinalizarViajePageModule {}
