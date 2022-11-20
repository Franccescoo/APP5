import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCuentaConductorPageRoutingModule } from './crear-cuenta-conductor-routing.module';

import { CrearCuentaConductorPage } from './crear-cuenta-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCuentaConductorPageRoutingModule
  ],
  declarations: [CrearCuentaConductorPage]
})
export class CrearCuentaConductorPageModule {}
