import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajes-disponible',
  templateUrl: './viajes-disponible.page.html',
  styleUrls: ['./viajes-disponible.page.scss'],
})
export class ViajesDisponiblePage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) {}
  ngOnInit() {
  }

  click(){
    this.router.navigate(['/escanearqr']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Tomado',
      subHeader: 'Espera al conductor',
      message: '¡Que tengas buen viaje!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

}
