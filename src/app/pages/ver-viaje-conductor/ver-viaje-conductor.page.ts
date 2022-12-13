import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-viaje-conductor',
  templateUrl: './ver-viaje-conductor.page.html',
  styleUrls: ['./ver-viaje-conductor.page.scss'],
})
export class VerViajeConductorPage implements OnInit {
  buena = 'Quilicura';
  buena2 = 'Las Condes';
  buena3 = 'Independencia';
  buena4 = 'Bosque';
  buena5 = 'Estación Central';
  buena6 = 'Cerrillos';
  buena7 = 'Navia';
  buena8 = 'Conchalí';
  buena9 = 'Huechuraba';
  buena10 = 'La Cisterna';
  buena11 = 'La Florida';
  buena12 = 'La Pintana';
  buena13 = 'Lo Espejo';
  buena14 = 'Maipú';
  buena15 = 'Providencia';
  
  Desde= 'Mall Plaza Norte';
  nombreV='';
  patenteV='';
  comunaV='';
  costoV='';
  asientoV='';

  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';

  a = null;
  b = null;
  c = null;
  d = null;
  e = null;

  constructor(private activedRouter: ActivatedRoute,public nativeStorage: NativeStorage,private alertController: AlertController,private router:Router) { 
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
      }
    })

    this.GetNombre()
    this.GetPatente()
    this.GetComuna()
    this.GetCosto()
    this.GetAsiento()
  }
  ngOnInit() {
  }

  GetNombre() {
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

  VerViaje(){
    this.nativeStorage.setItem('nombreViaje', this.nombreV);
    this.nativeStorage.setItem('patenteViaje', this.patenteV);
    this.nativeStorage.setItem('comunaViaje',this.comunaV);
    this.nativeStorage.setItem('costoViaje', this.costoV);
    this.nativeStorage.setItem('asientos', this.asientoV);
    this.router.navigate(['/viajeencurso']);
  }

  EliminarV(){
    this.nativeStorage.setItem('nombreViaje', this.a);
    this.nativeStorage.setItem('patenteViaje', this.b);
    this.nativeStorage.setItem('comunaViaje',this.c);
    this.nativeStorage.setItem('costoViaje', this.d);
    this.nativeStorage.setItem('asientos', this.e);
    this.presentAlert1("El viaje ha sido eliminado");
    this.router.navigate(['/inicio-conductor']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Tomado',
      subHeader: 'Espera al conductor',
      buttons: ['Listo'],
    });

    await alert.present();
  }

  async presentAlert1(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
