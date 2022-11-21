import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public nativeStorage: NativeStorage,private alertController: AlertController,private route:Router) { 

    this.GetNombre()
    this.GetPatente()
    this.GetComuna()
    this.GetCosto()
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