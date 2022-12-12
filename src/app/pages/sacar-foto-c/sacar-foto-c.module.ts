import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacarFotoCPageRoutingModule } from './sacar-foto-c-routing.module';

import { SacarFotoCPage } from './sacar-foto-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacarFotoCPageRoutingModule
  ],
  declarations: [SacarFotoCPage]
})
export class SacarFotoCPageModule {}
