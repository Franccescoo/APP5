import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCuentaClientePage } from './crear-cuenta-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCuentaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCuentaClientePageRoutingModule {}
