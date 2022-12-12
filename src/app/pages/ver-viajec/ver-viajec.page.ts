import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';
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
  asientosV='';
  Usuario: any[] = []

  nombreTomado='';

  comen='';
  punto=0;

  a = null;
  b = null;
  c = null;
  d = null;
  e = null;

  Auto: any[] = []

  Viaje: any[] = []

  listaViaje: any = [
    {
      nombre: '',
      patente: '',
      comuna: '',
      costo: '',
      asiento:''
    }
  ]
  constructor(private activedRouter: ActivatedRoute, private alertController: AlertController,private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.nombreV = this.router.getCurrentNavigation().extras.state.nombreenviadov;
        this.patenteV = this.router.getCurrentNavigation().extras.state.patenteenviadov;
        this.comunaV = this.router.getCurrentNavigation().extras.state.comunaenviadov;
        this.costoV = this.router.getCurrentNavigation().extras.state.costoenviadov;
        this.asientosV = this.router.getCurrentNavigation().extras.state.asientoenviadov;
      }
    })

    this.GetNombre()
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

  GetNombre() {
    this.nativeStorage.getItem('ClientesToma').then((data1)=>{
      //this.presentAlert1(data4);
      this.nombreTomado = data1
    })
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Viaje Finalizado',
      message: '¡Conduce con cuidado!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Viaje Cancelado!',
      message: '¡Puedes crear otro viaje!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  FinalizarV(){
    this.nativeStorage.setItem('nombreViaje', this.a);
    this.nativeStorage.setItem('patenteViaje', this.b);
    this.nativeStorage.setItem('comunaViaje',this.c);
    this.nativeStorage.setItem('costoViaje', this.d);
    this.nativeStorage.setItem('asientos', this.e);
    this.presentAlert2();
    this.router.navigate(['/inicio-cliente']);
  }


  EnviarComen(){
    this.bd.agregarComen(this.comen);
    this.punto=1;
  }

  tomarV(){
    this.bd.presentAlert("El viaje a empezado!!")
    this.router.navigate(['/viajeencurso']);
  }

}
