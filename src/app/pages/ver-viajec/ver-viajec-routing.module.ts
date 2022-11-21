import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerViajecPage } from './ver-viajec.page';

const routes: Routes = [
  {
    path: '',
    component: VerViajecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerViajecPageRoutingModule {}
