import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-sacar-foto-c',
  templateUrl: './sacar-foto-c.page.html',
  styleUrls: ['./sacar-foto-c.page.scss'],
})
export class SacarFotoCPage implements OnInit {
  onModalCancel(onModalCancel: any) {
    throw new Error('Method not implemented.');
  }
  imagen: any;
  usua : number;

  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';
  Usuario: any[] = []
  
  constructor(private router: Router,private activedRouter: ActivatedRoute,private camara: CameraService,public nativeStorage: NativeStorage, private bd: DbservicioService) { 
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

    this.nativeStorage.getItem('id').then((data) => {
      this.usua = data
    })

    this.camara.fetchImage().subscribe(item=>{
      this.imagen = item;
    })
  }

  Camara() {
    this.camara.Camera();
    this.imagen = this.camara.image;
  }


  Galeria() {
    this.camara.Galery();
    this.imagen = this.camara.image;
  }

  Guardar(){
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].imagen,
        idrolenviado: this.Usuario[0].fk_id_rol,
      }
    }
    this.bd.modificarUsuarioImg(this.idextras,this.imagen);
    this.router.navigate(['/perfil'], navigationExtras);
  }

}
