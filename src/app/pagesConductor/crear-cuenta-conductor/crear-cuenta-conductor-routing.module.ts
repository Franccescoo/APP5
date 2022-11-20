import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCuentaConductorPage } from './crear-cuenta-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCuentaConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCuentaConductorPageRoutingModule {}
