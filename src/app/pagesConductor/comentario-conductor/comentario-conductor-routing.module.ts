import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioConductorPage } from './comentario-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarioConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarioConductorPageRoutingModule {}
