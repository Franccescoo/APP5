import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.bd.modificarUsuarioImg(this.usua,this.imagen);
  }

}
