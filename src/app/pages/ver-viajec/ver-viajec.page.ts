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

  nombreV='';
  patenteV='';
  comunaV='';
  costoV='';
  
  Usuario: any[] = []

  Auto: any[] = []

  Viaje: any[] = []

  listaViaje: any = [
    {
      nombre: '',
      patente: '',
      comuna: '',
      costo: ''
    }
  ]
  constructor(private activedRouter: ActivatedRoute, private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreV = this.router.getCurrentNavigation().extras.state.nombreenviadov;
        this.patenteV = this.router.getCurrentNavigation().extras.state.patenteenviadov;
        this.comunaV = this.router.getCurrentNavigation().extras.state.comunaenviadov;
        this.costoV = this.router.getCurrentNavigation().extras.state.costoenviadov;
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
          this.listaViaje = item;
        })
      }
    })


  }

}
