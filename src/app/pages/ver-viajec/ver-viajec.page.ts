import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';
@Component({
  selector: 'app-ver-viajec',
  templateUrl: './ver-viajec.page.html',
  styleUrls: ['./ver-viajec.page.scss'],
})
export class VerViajecPage implements OnInit {


  idviajeextra='';
  nombreviajeextra='';
  patenteextra='';
  comunaextra='';
  costoextra='';
  Usuario: any[] = []
  Auto: any[] = []
  Viaje: any[] = []
  constructor(private activedRouter: ActivatedRoute, private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idviajeextra = this.router.getCurrentNavigation().extras.state.idviajeenviado;
        this.nombreviajeextra = this.router.getCurrentNavigation().extras.state.nombreviajeenviado;
        this.patenteextra = this.router.getCurrentNavigation().extras.state.patenteenviado;
        this.comunaextra = this.router.getCurrentNavigation().extras.state.comunaenviado;
        this.costoextra = this.router.getCurrentNavigation().extras.state.costoenviado;
      }
    })
   }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;

        })
      }
    })
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchauto().subscribe(item => {
          this.Auto = item;
        })
      }
    })
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchViaje().subscribe(item => {
          this.Viaje = item;
        })
      }
    })


  }

}
