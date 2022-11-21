import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeencursoPageRoutingModule } from './viajeencurso-routing.module';

import { ViajeencursoPage } from './viajeencurso.page';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeencursoPageRoutingModule,
    MatIconModule
  ],
  declarations: [ViajeencursoPage]
})
export class ViajeencursoPageModule {}
