import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarPassPage } from './confirmar-pass.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarPassPageRoutingModule {}
