import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarConductorPageRoutingModule } from './modificar-conductor-routing.module';

import { ModificarConductorPage } from './modificar-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarConductorPageRoutingModule
  ],
  declarations: [ModificarConductorPage]
})
export class ModificarConductorPageModule {}
