import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarPassClientePage } from './recuperar-pass-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPassClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPassClientePageRoutingModule {}
