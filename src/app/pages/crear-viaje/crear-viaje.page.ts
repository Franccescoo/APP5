import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  fotocon: any;

  asientos = '';

  radioSelected = '';
  tarifa = '';
  comun = '';
  idextras = '';
  nombreextras = '';
  claveextras = '';
  fotoextras = '';
  idrolextras = '';
  patentextras = '';
  fkextras = '';
  marcaextras = '';

  a = null;
  b = null;
  c = null;
  d = null;
  e = null;

  Usuario: any[] = []
  Auto: any[] = []
  Viaje: any[] = []
  constructor(private activedRouter: ActivatedRoute, private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
        this.patentextras = this.router.getCurrentNavigation().extras.state.patenteenviado;
        this.fkextras = this.router.getCurrentNavigation().extras.state.fkenviado;
      }
    })
  }


  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;

        })
      }
    })
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchauto().subscribe(item => {
          this.Auto = item;
        })
      }
    })
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchViaje().subscribe(item => {
          this.Viaje = item;
        })
      }
    })

  }//FINAL ONINIT



  crearviaje() {
    // if(this.asientos < '4' && this.asientos == '0')
    
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     nombreenviadov: this.nombreextras,
    //     patenteenviadov: this.radioSelected,
    //     comunaenviadov: this.comun,
    //     costoenviadov: this.tarifa,
    //     asientoenviadov: this.asientos
    //   }
    // }
    if (this.asientos > '4'){
      this.bd.presentAlert('Los asientos deben ser menos que 4')
    this.router.navigate(['/inicio-conductor'])
  }
  else if (this.asientos < '1'){
      this.bd.presentAlert('Los asientos deben ser m??s de 1')
    }
    else{
      this.nativeStorage.setItem('nombreViaje', this.nombreextras);
    this.nativeStorage.setItem('patenteViaje', this.radioSelected);
    this.nativeStorage.setItem('comunaViaje', this.comun);
    this.nativeStorage.setItem('costoViaje', this.tarifa);
    this.nativeStorage.setItem('asientos', this.asientos);
      this.bd.agregarviaje(this.nombreextras, this.comun, this.tarifa, this.radioSelected, this.asientos)
    this.bd.presentAlert("Viaje creado")
    this.router.navigate(['/inicio-conductor'])
  }
  }

  Volver() {
    this.nativeStorage.setItem('nombreViaje', this.a);
    this.nativeStorage.setItem('patenteViaje', this.b);
    this.nativeStorage.setItem('comunaViaje', this.c);
    this.nativeStorage.setItem('costoViaje', this.d);
    this.nativeStorage.setItem('asientos', this.e);
    this.router.navigate(['/inicio-conductor'])
  }


}//FINAL;
