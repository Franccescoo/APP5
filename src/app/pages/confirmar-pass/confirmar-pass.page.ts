import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-confirmar-pass',
  templateUrl: './confirmar-pass.page.html',
  styleUrls: ['./confirmar-pass.page.scss'],
})
export class ConfirmarPassPage implements OnInit {
  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';
  Usuario: any[] = []

  actual='';

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

  ConfirmarPass(){
    if(this.claveextras == this.actual) {
      let navigationExtras: NavigationExtras = {
        state: {
          idenviado: this.Usuario[0].idusuario,
          nombreenviado: this.Usuario[0].nombre,
          claveenviado: this.Usuario[0].clave,
          fotoenviado: this.Usuario[0].foto,
          idrolenviado: this.Usuario[0].fk_id_rol
        }
      }
      this.router.navigate(['/cambiar-pass'], navigationExtras);
    }else {
      this.bd.presentAlert("La Contraseña no coincide")
    }
  }

}
