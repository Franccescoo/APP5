import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SacarFotoPPage } from './sacar-foto-p.page';

const routes: Routes = [
  {
    path: '',
    component: SacarFotoPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SacarFotoPPageRoutingModule {}
