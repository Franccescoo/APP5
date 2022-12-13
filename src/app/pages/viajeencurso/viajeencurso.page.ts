import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { DbservicioService } from 'src/app/services/dbservicio.service';
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
  asientoNuevo='';
  ClienteTomado="";

  comen='';
  punto=0;

  a = null;
  b = null;
  c = null;
  d = null;
  e = null;
  f = null;
  nombreTomado='';
  constructor(private bd: DbservicioService,public nativeStorage: NativeStorage,private alertController: AlertController,private route:Router) { 

    this.GetNombre()
    this.GetPatente()
    this.GetComuna()
    this.GetCosto()
    this.GetAsiento()
    this.GetNombre2()
    this.GetAsientoNuevo()
  }
  ngOnInit() {
  }

  GetNombre2() {
    this.nativeStorage.getItem('ClientesToma').then((data1)=>{
      //this.presentAlert1(data4);
      this.nombreTomado = data1
    })
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
  GetAsiento(){
    this.nativeStorage.getItem('asientos').then((data5)=>{
      //this.presentAlert1(data5);
      this.asientosV = data5
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
    this.route.navigate(['/inicio-conductor']);
  }

  CancelarV(){
    this.nativeStorage.setItem('ClientesToma', this.f);
    this.presentAlert1();
    this.route.navigate(['/ver-viaje-conductor']);
  }

  EnviarComen(){
    this.bd.agregarComen(this.comen);
    this.punto=1;
  }

}