import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { CameraService } from 'src/app/services/camera.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';


@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.page.html',
  styleUrls: ['./modificar-cliente.page.scss'],
})
export class ModificarClientePage implements OnInit {
  fotocon: any;

  nombremod = '';

  clavemod = '';
  clavemod2 = '';

  idextras = '';
  nombreextras = '';
  claveextras = '';
  fotoextras = '';
  idrolextras = '';

  id = '';
  nombre = '';
  clave = '';
  idrol = '';
  Usuario: any[] = []
  id1 = ''

  constructor(private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation().extras.state) {
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
    this.guardarnombre()
    this.guardaridrol()
  }

  ngOnInit() {
    this.api.getfoto().subscribe(item => {
      this.fotocon = item;
    })
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

  AbrirCamara() {
    this.api.TakePicture();
  }

  modificar() {
////////////////////////////////////////////////////////////////////////
        if (this.nombremod.length != 0 ){
          let navigationExtras: NavigationExtras = {
            state: {
              idenviado: this.idextras,
              nombreenviado: this.nombreextras,
              claveenviado: this.claveextras,
              fotoenviado: this.fotoextras,
              idrolenviado: this.idrolextras
            }
          }
          this.router.navigate(['/inicio-cliente'],navigationExtras);
          this.bd.updateUsuario(this.idextras, this.nombremod);
          this.bd.presentAlert("Usuario Modificado Exitosamente!!")
        }
        else {
          this.bd.presentAlert("Debe ingresar un texto")
        }
      }
      
    }