import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicRouteStrategy } from '@ionic/angular';

import { MapaConductorPage } from './mapa-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: MapaConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, Camera, Geolocation, NativeStorage,Storage],
})
export class MapaConductorPageRoutingModule {}
