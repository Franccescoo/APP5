import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {
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
  id = '';
  nombre = '';
  clave = '';
  idrol = '';
  Usuario: any[] = []

  constructor(private activedRouter: ActivatedRoute,private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
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

  }



  verviaje(){
    this.router.navigate(['/solicitud-viaje']);
  }

  irPefil(){
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].foto,
        idrolenviado: this.Usuario[0].fk_id_rol
      }
    }
    this.router.navigate(['/perfilcliente'],navigationExtras);

  }


}