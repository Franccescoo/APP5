import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerViajecPageRoutingModule } from './ver-viajec-routing.module';

import { VerViajecPage } from './ver-viajec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerViajecPageRoutingModule
  ],
  declarations: [VerViajecPage]
})
export class VerViajecPageModule {}
