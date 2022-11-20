import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-viaje',
  templateUrl: './finalizar-viaje.page.html',
  styleUrls: ['./finalizar-viaje.page.scss'],
})
export class FinalizarViajePage implements OnInit {

  constructor(private alertController: AlertController) {}
  @ViewChild(IonModal) modal: IonModal;
  ngOnInit() {
  }

  message = '';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'Cancelar');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Finalizado!',
      subHeader: 'Viaje finalizado correctamente',
      message: '¡Cuidado al conducir!',
      buttons: ['Listo'],
    });

    await alert.present();
  }

}