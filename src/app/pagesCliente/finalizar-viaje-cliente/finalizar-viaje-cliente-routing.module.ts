import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarViajeClientePage } from './finalizar-viaje-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarViajeClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class FinalizarViajeClientePageRoutingModule {}
