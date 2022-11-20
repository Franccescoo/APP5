import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Apiservices2Service } from 'src/app/services/apiservices2.service';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { DbservicioService } from 'src/app/services/dbservicio.service';



@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  ingreso: any = {
    nombre: '',
    clave: ''
  };
  usuarios: any = [{
    id: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }];

  Usuario: any[] = []
  Auto: any[] = []
  constructor(private menuController: MenuController, private nativeStorage: NativeStorage, private alertController: AlertController, private router: Router, private api: Apiservices2Service, private bd: DbservicioService, public storage: Storage, private toastController: ToastController) {
    menuController.enable(false, "first")

  }
  ngOnInit() {
    this.api.getUsuarios().subscribe((res) => {
      this.Usuario = res;
      console.log(res)
      for (let x of this.Usuario) {
        this.bd.presentAlert(x.nombre);
        this.bd.agregarUsuario(x.id, x.nombre, x.clave, x.id_rol);
      }
      this.api.getautos().subscribe((res)=>{
        this.Auto = res;
        for (let x of this.Auto){
          this.bd.presentAlert(x.patente);
          this.bd.agregarAuto(x.patente,x.id_usuario,x.marca);
        }
      })
    });
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
  }


  async iniciarSesion() {
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
      this.presentToast("Por favor Ingrese su nombre de Usuario");
    }
    else if (this.ingreso.clave.length == 0) {
      this.presentToast("Ingrese Su Contraseña");
    }
    else if (this.Usuario.length == 0) {
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }
    else {
      if (this.Usuario[0].fk_id_rol == 2) {
        this.presentToast("Bienvenido" + this.ingreso.nombre);
        let navigationExtras: NavigationExtras = {
          state: {
            idenviado: this.Usuario[0].idusuario,
            nombreenviado: this.Usuario[0].nombre,
            claveenviado: this.Usuario[0].clave,
            fotoenviado: this.Usuario[0].foto,
            idrolenviado: this.Usuario[0].fk_id_rol
          }
        }
        this.router.navigate(['/inicio-cliente'], navigationExtras);
      } else {
        if (this.Usuario[0].fk_id_rol == 1) {
          this.presentToast("Bienvenido" + this.ingreso.nombre);
          let navigationExtras: NavigationExtras = {
            state: {
              idenviado: this.Usuario[0].idusuario,
              nombreenviado: this.Usuario[0].nombre,
              claveenviado: this.Usuario[0].clave,
              fotoenviado: this.Usuario[0].foto,
              idrolenviado: this.Usuario[0].fk_id_rol
            }
          }
          this.router.navigate(['/inicio-conductor'], navigationExtras);
        }

      }
    }
  }


async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000

  });
  toast.present();
}

  // editar(x){
  //   let navigationsExtras: NavigationExtras ={
  //     state:{
  //       idEnviado2: x.id2,
  //       nombreenviado: x.nombre,
  //       usernameneviado: x.username
  //     }
  //   }
  //   this.router.navigate(['/modificar-cliente'],navigationsExtras);
  // }

}
