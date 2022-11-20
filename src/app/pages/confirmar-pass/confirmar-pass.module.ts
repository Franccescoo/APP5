import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarPassPageRoutingModule } from './confirmar-pass-routing.module';

import { ConfirmarPassPage } from './confirmar-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPassPageRoutingModule
  ],
  declarations: [ConfirmarPassPage]
})
export class ConfirmarPassPageModule {}
