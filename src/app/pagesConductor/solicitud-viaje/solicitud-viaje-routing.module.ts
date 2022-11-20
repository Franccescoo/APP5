import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudViajePage } from './solicitud-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudViajePageRoutingModule {}
