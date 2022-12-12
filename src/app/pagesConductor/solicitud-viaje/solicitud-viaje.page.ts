import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage implements OnInit {

  buena = 'Quilicura';
  buena2 = 'Las Condes'
  buena3 = 'Independencia'

  Desde= 'Mall Plaza Norte';
  nombreV='';
  patenteV='';
  comunaV='';
  costoV='';
  asientoV:any;

  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';


  asiento: number;
  punto=0;
  Asi: number;

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

  click(){
    this.asiento = this.asientoV - this.Asi;
    if( this.asiento < 0 ){
      this.presentAlert5("Asientos no disponibles")
      this.asiento = 3;
    } else if ( this.asiento > 0 ) {
      this.presentAlert5("Asientos Seleccionados")
      this.presentAlert5("Viaje tomado")
      this.punto=1;
      this.nativeStorage.setItem('asientosToma', this.Asi);
      this.nativeStorage.setItem('ClientesToma', this.nombreextras);
      this.router.navigate(['/ver-viajec']);
    }
  }

  async presentAlert5(msj: string) {
    const alert = await this.alertController.create({
      message: msj,
      buttons: ['OK'],
    });
  
    await alert.present();
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
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

}