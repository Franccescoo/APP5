import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CameraService {
  imagen = new BehaviorSubject([]);
  base64Image: any;
  
  constructor(private camera: Camera) { }

  TakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((ImageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + ImageData;
      this.imagen.next(this.base64Image);
    }, (err) => {

    })
  }

  getfoto(): Observable<any> {
    return this.imagen.asObservable();
    
  }

}
