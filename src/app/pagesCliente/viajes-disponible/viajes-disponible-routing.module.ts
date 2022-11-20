import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesDisponiblePage } from './viajes-disponible.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesDisponiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesDisponiblePageRoutingModule {}
