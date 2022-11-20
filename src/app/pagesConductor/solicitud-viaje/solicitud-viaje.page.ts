import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitud-viaje',
  templateUrl: './solicitud-viaje.page.html',
  styleUrls: ['./solicitud-viaje.page.scss'],
})
export class SolicitudViajePage implements OnInit {

  constructor(private alertController: AlertController,private route:Router) { }
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Tomado',
      subHeader: 'Espera al usuario',
      message: '¡Conduce con cuidado!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

}