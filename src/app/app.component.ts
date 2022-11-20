import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { DbservicioService } from './services/dbservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  idrol='';

  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';

  Usuario: any[] = []

  constructor(private activedRouter: ActivatedRoute,public nativeStorage: NativeStorage,private bd: DbservicioService,private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
      }
    })

    this.guardaridrol()
    this.inicio
    this.mapa
    this.perfil
  }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res) {
        this.bd.fetchUser().subscribe(item => {
          this.Usuario = item
        })
      }
    })
  }

  guardaridrol(){
    this.nativeStorage.getItem('idrol').then((data4)=>{
      this.idrol = data4
    })
  }
  inicio(){
    if (this.Usuario[0].fk_id_rol == "1") {
      this.router.navigate(['/inicio-conductor']);
    } else {
      if (this.Usuario[0].fk_id_rol == "2") {
        this.router.navigate(['/inicio-cliente']);
      }

    }
  }
  mapa(){
    if (this.Usuario[0].fk_id_rol == "1") {
      this.router.navigate(['/mapa-conductor']);
    } else {
      if (this.Usuario[0].fk_id_rol== "2") {
        this.router.navigate(['/mapa-conductor']);
      }

    }
  }
  perfil(){
    if (this.Usuario[0].fk_id_rol == "1") {
      let navigationExtras: NavigationExtras = {
        state: {
          idenviado: this.Usuario[0].idusuario,
          nombreenviado: this.Usuario[0].nombre,
          claveenviado: this.Usuario[0].clave,
          fotoenviado: this.Usuario[0].foto,
          idrolenviado: this.Usuario[0].fk_id_rol
        }
      }
      this.router.navigate(['/perfil'],navigationExtras);
    } else {
      if (this.Usuario[0].fk_id_rol == "2") {
        let navigationExtras: NavigationExtras = {
          state: {
            idenviado: this.Usuario[0].idusuario,
            nombreenviado: this.Usuario[0].nombre,
            claveenviado: this.Usuario[0].clave,
            fotoenviado: this.Usuario[0].foto,
            idrolenviado: this.Usuario[0].fk_id_rol
          }
        }
        this.router.navigate(['/perfil'],navigationExtras);
      }

    }
  }

}
