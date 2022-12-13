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
  Desde= 'Mall Plaza Norte';
  nombreV='';
  patenteV='';
  comunaV='';
  costoV='';
  asientosV='';
  Usuario: any[] = []
  asientoV='';
  nombreTomado='';
  asientoNuevo='';
  comen='';
  punto=0;

  a = null;
  b = null;
  c = null;
  d = null;
  e = null;
  f = null;

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
    this.GetNombre1()
    this.GetPatente()
    this.GetComuna()
    this.GetCosto()
    this.GetAsiento()
    this.GetAsientoNuevo()
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

  GetNombre1() {
    this.nativeStorage.getItem('nombreViaje').then((data)=>{
      //this.presentAlert1(data);
      this.nombreV = data
    })
  }

  GetPatente() {
    this.nativeStorage.getItem('patenteViaje').then((data2)=>{
      //this.presentAlert1(data2);
      this.patenteV = data2
    })
  }

  GetComuna() {
    this.nativeStorage.getItem('comunaViaje').then((data3)=>{
      //this.presentAlert1(data3);
      this.comunaV = data3
    })
  }

  GetCosto() {
    this.nativeStorage.getItem('costoViaje').then((data4)=>{
      //this.presentAlert1(data4);
      this.costoV = data4
    })
  }

  GetAsiento() {
    this.nativeStorage.getItem('asientos').then((data5)=>{
      //this.presentAlert1(data4);
      this.asientoV = data5
    })
  }

  GetNombre() {
    this.nativeStorage.getItem('ClientesToma').then((data1)=>{
      //this.presentAlert1(data4);
      this.nombreTomado = data1
    })
  }

  GetAsientoNuevo(){
    this.nativeStorage.getItem('asientosToma').then((data6)=>{
      //this.presentAlert1(data5);
      this.asientoNuevo = data6
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
    this.nativeStorage.setItem('ClientesToma', this.f);
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
