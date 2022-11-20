import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  id = '';
  nombre = '';
  clave = '';
  idrol = '';
  Usuario: any[] = []

  constructor(private bd: DbservicioService, private api: CameraService, public nativeStorage: NativeStorage, private router: Router) {
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
}