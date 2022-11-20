import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioConductorPageRoutingModule } from './comentario-conductor-routing.module';

import { ComentarioConductorPage } from './comentario-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioConductorPageRoutingModule
  ],
  declarations: [ComentarioConductorPage]
})
export class ComentarioConductorPageModule {}
