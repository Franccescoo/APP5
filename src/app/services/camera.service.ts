import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CameraService {
  image: any;
  obser: any = new BehaviorSubject([]);

  constructor(private camera: Camera ) { }


Camera(){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
    sourceType: this.camera.PictureSourceType.CAMERA,
    saveToPhotoAlbum: true,
    correctOrientation: true
    
  }
  
  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  this.image = 'data:image/jpeg;base64,' + imageData;
  this.obser.next(this.image)
 }, (err) => {
  // Handle error
 });

}

Galery(){

  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum: true,
    correctOrientation: true
  }
  
  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64 (DATA_URL):
  this.image = 'data:image/jpeg;base64,' + imageData;
  this.obser.next(this.image)
 }, (err) => {
  // Handle error
 });

}



fetchImage(): Observable<any[]>{
  return this.obser.asObservable();

}
}
