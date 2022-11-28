import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-viajeencurso',
  templateUrl: './viajeencurso.page.html',
  styleUrls: ['./viajeencurso.page.scss'],
})
export class ViajeencursoPage implements OnInit {
  
  Desde= 'Mall Plaza Norte';
  nombreV= '';
  patenteV='';
  comunaV='';
  costoV='';
  asientosV='';

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
  GetAsientos(){
    this.nativeStorage.getItem('asientos').then((data5)=>{
      //this.presentAlert1(data5);
      this.asientosV = data5
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
    this.presentAlert2();
    this.route.navigate(['/crear-viaje']);
  }

  CancelarV(){
    this.presentAlert1();
    this.route.navigate(['/crear-viaje']);
  }

}