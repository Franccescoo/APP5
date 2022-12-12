import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  fotocon: any;
  base64Image: any;
  idextras='';
  nombreextras='';
  claveextras='';
  fotoextras='';
  idrolextras='';
  Usuario: any[] = []
  
  nombremod='';
  id1=''
  id = '';
  nombre = '';
  clave = '';
  idrol = '';


  constructor(private camera: Camera,private activedRouter: ActivatedRoute,private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idextras = this.router.getCurrentNavigation().extras.state.idenviado;
        this.nombreextras = this.router.getCurrentNavigation().extras.state.nombreenviado;
        this.claveextras = this.router.getCurrentNavigation().extras.state.claveenviado;
        this.fotoextras = this.router.getCurrentNavigation().extras.state.fotoenviado;
        this.idrolextras = this.router.getCurrentNavigation().extras.state.idrolenviado;
      }
    })


    this.nativeStorage.getItem('id').then((data) => {
      this.id = data
    })
    this.nativeStorage.getItem('id1').then((data) => {
      this.id1 = data
    })
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


  
  Editar() {
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].foto,
        idrolenviado: this.Usuario[0].fk_id_rol
      }
    }
    this.router.navigate(['/modificar-conductor'], navigationExtras);
  }

  EditarPass(){
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].foto,
        idrolenviado: this.Usuario[0].fk_id_rol
      }
    }
    this.router.navigate(['/confirmar-pass'], navigationExtras);
  }

  sacarfoto(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 400,
      targetWidth: 400,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.base64Image = "data:image/jpeg;base64," + resultado;
    }).catch(error => {
      console.log(error);
    })
  }

  galeria(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: false,
        encodingType: this.camera.EncodingType.JPEG,
        targetHeight: 400,
        targetWidth: 400,
        correctOrientation: true,
        saveToPhotoAlbum: true
      }).then(resultado => {
        this.base64Image = "data:image/jpeg;base64," + resultado;
      }).catch(error => {
        console.log(error);
      })

  }

  EditarFoto(){
    let navigationExtras: NavigationExtras = {
      state: {
        idenviado: this.Usuario[0].idusuario,
        nombreenviado: this.Usuario[0].nombre,
        claveenviado: this.Usuario[0].clave,
        fotoenviado: this.Usuario[0].foto,
        idrolenviado: this.Usuario[0].fk_id_rol
      }
    }
    this.router.navigate(['/sacar-foto-c'], navigationExtras);
  }
}
