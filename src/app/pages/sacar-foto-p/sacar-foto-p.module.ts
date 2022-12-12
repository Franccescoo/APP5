import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SacarFotoPPageRoutingModule } from './sacar-foto-p-routing.module';

import { SacarFotoPPage } from './sacar-foto-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SacarFotoPPageRoutingModule
  ],
  declarations: [SacarFotoPPage]
})
export class SacarFotoPPageModule {}
