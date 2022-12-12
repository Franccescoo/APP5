import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-inicio-conductor',
  templateUrl: './inicio-conductor.page.html',
  styleUrls: ['./inicio-conductor.page.scss'],
})
export class InicioConductorPage implements OnInit {
  fotocon: any;


  nombremod='';

  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';
  patentextras='';
  fkextras='';
  marcaextras='';

  nombreV='';
  patenteV='';
  comunaV='';
  costoV='';

  id = '';
  nombre = '';
  clave = '';
  idrol = '';
  Usuario: any[] = []
  Auto: any[] = []
  Viaje: any[] = []
  constructor(private activedRouter: ActivatedRoute,private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
        this.patentextras = this.router.getCurrentNavigation().extras.state.patenteenviado;
        this.fkextras = this.router.getCurrentNavigation().extras.state.fkenviado;
        this.marcaextras = this.router.getCurrentNavigation().extras.state.marcaenviado;

        this.nombreV = this.router.getCurrentNavigation().extras.state.nombreenviadov;
        this.patenteV = this.router.getCurrentNavigation().extras.state.patenteenviadov;
        this.comunaV = this.router.getCurrentNavigation().extras.state.comunaenviadov;
        this.costoV = this.router.getCurrentNavigation().extras.state.costoenviadov;
      }
    })
    
    this.guardarid()
    this.guardarnombre()
    this.guardaridrol()
  }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item;

        })
      }
    })
    this.bd.dbState().subscribe((res)=>{
      if(res){
        this.bd.fetchauto().subscribe(item =>{
          this.Auto = item;
        })
      }
    })
    this.bd.dbState().subscribe((res)=>{
      if(res){
        this.bd.fetchViaje().subscribe(item =>{
          this.Viaje = item;
        })
      }
    })
    

  }


  guardarid() {
    this.nativeStorage.getItem('id').then((data) => {
      this.id = data
    })
    
  }
  guardarnombre() {
    this.nativeStorage.getItem('nombre').then((data2) => {
      this.nombre = data2
    })
  }

  guardarclave() {
    this.nativeStorage.getItem('clave').then((data3) => {
      this.clave = data3
    })
  }


  guardaridrol() {
    this.nativeStorage.getItem('idrol').then((data4) => {
      this.idrol = data4
    })
  }



  verauto(){
    let navigationExtras: NavigationExtras = {
      state: {
        patenteenviado: this.Auto[0].patente,
        idrolautoenviado: this.Auto[0].fk_id_rol,
        marcaenviado: this.Usuario[0].marca,

      }
    }
    this.router.navigate(['/ver-auto'], navigationExtras);
  }

  CrearViaje() {
    let navigationExtras: NavigationExtras = {
      state: {
        patenteenviado: this.Auto[0].patente,
        idrolautoenviado: this.Auto[0].fk_id_rol,        
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].foto,
        idrolenviado: this.Usuario[0].fk_id_rol
      }
    }
    this.router.navigate(['/crear-viaje'], navigationExtras);
  }

  verViaje(){
    let navigationExtras: NavigationExtras = {
      state: {
        nombreenviadov: this.nombreV,
        patenteenviadov: this.patenteV,
        comunaenviadov: this.comunaV,
        costoenviadov: this.costoV
      }
    }
    this.router.navigate(['/ver-viaje-conductor'],navigationExtras)
  }
}