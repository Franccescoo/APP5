import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
  '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class Apiservices2Service {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  // Se establece la base url del API a consumir
  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';
  apiURL2 ='https://my-json-server.typicode.com/victorrosendo/repoListadoAutos';
  // Se declara la variable http de tipo HttpClient

  constructor(private http:HttpClient, private alertController:AlertController) { }


  getUsuarios():Observable<any>{
    this.presentAlert("Entra al json");
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
  getautos():Observable<any>{
    this.presentAlert("Entra al json");
    return this.http.get(this.apiURL2+'/autos/').pipe(
      retry(3)
    );
  }


  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      message: msj,
      buttons: ['OK'],
    });
  
    await alert.present();
  }
}
