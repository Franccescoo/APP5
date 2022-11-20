import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { LocationService } from 'src/app/services/location.service';

declare var google: any

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}
@Component({
  selector: 'app-mapa-conductor',
  templateUrl: './mapa-conductor.page.html',
  styleUrls: ['./mapa-conductor.page.scss'],
})
export class MapaConductorPage implements OnInit {
  map: any;
  locationService: any;

latitude; 
longitude;

@ViewChild('map', {read: ElementRef, static: false}) mapView: ElementRef;

  constructor(private geolocation: Geolocation,public toastController: ToastController, private locationservice: LocationService,private alertController: AlertController,) {
    this.locationservice.getPosition()
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  ngAfterViewInit() {
    this.geolocationNative();
  }

  ngOnInit(){
      this.loadMap();
  }

  geolocationNative() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true}).then((geposition: Geoposition) =>{
      this.latitude = geposition.coords.latitude
      this.longitude = geposition.coords.longitude
      }).catch((e) => {
        console.log(e);
      });
    }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tus coordenadas son: lat ' + this.latitude + ' y lng: ' + this.longitude,
      duration: 2000
    });
    toast.present();
  }

  loadMap() {
    // create a new map by passing HTMLElement  lat: -33.36326318588252, lng: -70.67801166481883};
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.36326318588252, lng: -70.67801166481883};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 13
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      const market = {
        position: {
          lat: this.latitude,
          lng:  this.longitude
        },
        title: 'Tu Ubicación'
      };
      this.addMarker(market);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Tus coordenadas son: lat ' + this.latitude + ' y lng: ' + this.longitude,
      buttons: ['OK'],
    });
  
    await alert.present();
  }

}