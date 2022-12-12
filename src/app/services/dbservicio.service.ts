import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { Auto } from './auto';
import { Comentario } from './comentario';
import { Comuna } from './comuna';
import { DetalleViaje } from './detalleviaje';
import { Rol } from './rol';
import { Usuario } from './Usuario';
import { Viaje } from './viaje';
import { ViajeComuna } from './viajecomuna';

@Injectable({
  providedIn: 'root'
})
export class DbservicioService {

  public database: SQLiteObject;


  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idrol INTEGER PRIMARY KEY , nombrerol VARCHAR (30));";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(idusuario INTEGER PRIMARY KEY autoincrement  , nombre VARCHAR (20)  , clave VARCHAR (15), foto BLOB ,fk_id_rol INTEGER ,FOREIGN KEY(fk_id_rol) REFERENCES rol(idrol));";
  tablaAuto: string = "CREATE TABLE IF NOT EXISTS auto( patente VARCHAR(30) PRIMARY KEY   , marca VARCHAR (20) ,  modelo VARCHAR (30)  , puesto INTEGER  ,fk_id_usuario INTEGER ,FOREIGN KEY(fk_id_usuario) REFERENCES usuario(idusuario));";
  tablaViaje: string = "CREATE TABLE IF NOT EXISTS viaje(idviaje INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(50) , patente VARCHAR(50) , comuna VARCHAR(50)  , costo INTEGER, asientos INTEGER, nombpasajero VARCHAR(50), idpasajero INTEGER);";

  tablaComen: string = "CREATE TABLE IF NOT EXISTS comentario(idComentario INTEGER PRIMARY KEY autoincrement, comentario VARCHAR(500), fk_iduser INTEGER, FOREIGN KEY(fk_iduser) REFERENCES usuario(idusuario));";

  tablaComuna: string = "CREATE TABLE IF NOT EXISTS Comuna(idComuna INTEGER PRIMARY KEY , nombreComuna VARCHAR(50) );";



  // INSERTS //

  viaje1: string = "INSERT OR IGNORE INTO viaje ( nombre,  patente, comuna, costo) VALUES ('franccesco',  'KFC10MF', 'QUILICURA', 5000);";

  // usuario1: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, username, fk_id_rol) VALUES (1, 'v.rosendo','J.12mm8','Victor', 1);";
  // usuario2: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, fk_id_rol) VALUES (2, 'j.baez','B.34vf8', 2);";
  // usuario3: string = "INSERT or IGNORE INTO usuario(idusuario, nombre, clave, fk_id_rol) VALUES (3, 'a.diaz','C.54yt78', 2);";


  // auto1: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('FF-HH-22','Audi',1);";
  // auto2: string = "INSERT or IGNORE INTO auto(patente, marca ,fk_id_usuario) VALUES ('GG-11-RR','BMW',1);";


  conductor: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (1, 'Conductor');";
  pasajero: string = "INSERT or IGNORE INTO rol(idrol, nombrerol) VALUES (2, 'Pasajero');";

  //TablaComuna1: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (1, 'Quilicura');";
  //TablaComuna2: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (2, 'Conchali');";
  //TablaComuna3: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (3, 'Huechuraba');";
  //TablaComuna4: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (4, 'Las Condes');";
  //TablaComuna5: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (5, 'La Cisterna');";
  //TablaComuna6: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (6, 'Recoleta');";
  //TablaComuna7: string = "INSERT INTO or IGNORE comuna (idComuna, nombreComuna) VALUES (7, 'Independencia');";

  //OBSERVABLES //
  listausuario = new BehaviorSubject([]);

  listauto = new BehaviorSubject([]);

  listaComen = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  listaComuna = new BehaviorSubject([]);

  listaViaje = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private platform: Platform, public alertController: AlertController) {
    //Crear base de datos//
    this.CrearBD();
  }


  //Estado base de datos //
  dbState() {
    return this.isDbReady.asObservable();
  }

  CrearBD() {

    this.platform.ready().then(() => {
      //creación de la BD
      this.sqlite.create({
        name: 'miautoOooov.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //crear las tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Creación de BD" + e);
      })

    })
  }

  //método para crear tablas
  async crearTablas() {
    try {
      //Tipos Usuario Crear e Insertar//
      await this.database.executeSql(this.tablaRol,[]);  
      //this.presentAlert("error tabla 1")
      await this.database.executeSql(this.pasajero,[]);
      //this.presentAlert("error tabla 2")
      await this.database.executeSql(this.conductor,[]);
      //this.presentAlert("error tabla 3")
      await this.database.executeSql(this.tablaUsuario,[]);   
      //this.presentAlert("error tabla 4")
      await this.database.executeSql(this.tablaAuto,[]);
      //this.presentAlert("error tabla 5")
      await this.database.executeSql(this.tablaViaje,[]);
      //this.presentAlert("error tabla 6")
      await this.database.executeSql(this.tablaComen,[]);
      //this.presentAlert("error tabla 7")

      this.buscarUsuario();
      this.buscarViaje();
      
      //this.login('', '');

      this.buscarAuto();

      this.isDbReady.next(true);
    } catch (e) {
      this.presentAlert("error al crear tablas" + e);

    }


  }

  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idusuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            fk_id_rol: res.rows.item(i).fk_id_rol

          });
        }
      }
      this.listausuario.next(items);
    });
  }
  buscarViaje() {
    return this.database.executeSql('SELECT * FROM viaje', []).then(res => {
      let items: Viaje[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idviaje: res.rows.item(i).idviaje,
            nombre: res.rows.item(i).nombre,
            patente: res.rows.item(i).patente,
            comuna: res.rows.item(i).comuna,
            costo: res.row.item(i).costo,
            asientos: res.row.item(i).asientos

          });
        }
      }
      this.listaViaje.next(items);
    });
  }


  login(nombre, clave) {
    let data = [nombre, clave]
    return this.database.executeSql('SELECT * FROM usuario WHERE nombre=? AND clave=? ', data).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idusuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            fk_id_rol: res.rows.item(i).fk_id_rol
          });
        }

      }
      this.listausuario.next(items);
    });
  }

  //USER
  fetchUser(): Observable<Usuario[]> {
    return this.listausuario.asObservable();
  }


  fetchComen(): Observable<Comentario[]> {
    return this.listaComen.asObservable();
  }

  fetchViaje(): Observable<Viaje[]>{
    return this.listaViaje.asObservable();
  }

  agregarviaje(nombre,destino,monto,patente,asientos){
    let data =[nombre,patente,destino,monto,asientos];
    return this.database.executeSql('INSERT or IGNORE INTO viaje(nombre,patente,comuna,costo,asientos) VALUES (?,?,?,?,?)',data).then(res=>{
      this.buscarViaje();
    })

  }
  eliminarviaje(idviaje){
    let data =[idviaje];
    return this.database.executeSql('DELETE FROM viaje WHERE idviaje = ?', [idviaje]).then(res => {
      this.buscarViaje();
    })

  }

  deleteUsuario(idusuario) {
    return this.database.executeSql('DELETE FROM usuario WHERE idusuario = ?', [idusuario]).then(res => {
      this.buscarUsuario();
    });
  }
  agregarUsuario(idusuario, nombre, clave,  fk_id_rol) {
    let data = [idusuario, nombre, clave, fk_id_rol];
    return this.database.executeSql('INSERT or IGNORE INTO  usuario (idusuario, nombre, clave, fk_id_rol) VALUES (?, ?, ?, ?)', data).then(res => {
      this.buscarUsuario();
    });
  }

  modificarUsuarioImg(idusuario, imagen) {
    let data = [imagen, idusuario];
    return this.database.executeSql('UPDATE usuario SET foto = ? WHERE idusuario = ?', data).then(data2 => {
      this.buscarUsuario();
      this.presentAlert('Imagen guardada')
    })
  }

  updateUsuario(idusuario,nombre) {
    let data = [nombre,idusuario];
    return this.database.executeSql('UPDATE usuario SET nombre = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });

  }
  updateUsuarioclave(idusuario,clave) {
    let data = [clave,idusuario];
    return this.database.executeSql('UPDATE usuario SET clave = ?  WHERE idusuario = ? ', data).then(res => {
      this.buscarUsuario();
    });

  }

  //AUTO
  buscarAuto() {
    return this.database.executeSql('SELECT * FROM auto', []).then(res => {
      let items: Auto[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            patente: res.rows.item(i).patente,
            modelo: res.rows.item(i).modelo,
            marca: res.rows.item(i).marca,
            puestos: res.rows.item(i).puestos,
            annio: res.rows.item(i).annio,
            fk_id_usuario: res.rows.item(i).fk_idusuario
          });
        }
      }
      this.listauto.next(items);
    });
  }


  fetchauto(): Observable<Auto[]> {
    return this.listauto.asObservable();
  }
  deleteAuto(patente) {
    return this.database.executeSql('DELETE FROM auto WHERE patente = ?', [patente]).then(res => {
      this.buscarAuto();
    });
  }

  agregarAuto(patente,fk_id_usuario,marca) {
    let data = [patente, fk_id_usuario,marca ];
    return this.database.executeSql('INSERT or IGNORE INTO auto (  patente , fk_id_usuario, marca) VALUES (? , ? , ?)', data).then(res => {
      this.buscarAuto();
    });
  }
  updateAuto(patente, modelo, marca, puestos, fk_idusuario) {
    let data = [patente, modelo, marca, puestos, fk_idusuario];
    return this.database.executeSql('UPDATE auto  SET    modelo = ? ,  marca = ? , puestos = ?, fk_idusuario = ?  where = patente ', data).then(res => {
      this.buscarAuto();
    });

  }

  id(idusuario) {
    let data = [idusuario]
    return this.database.executeSql('SELECT * FROM usuario WHERE idusuario = ? ', data).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idusuario: res.rows.item(i).idusuario,
            nombre: res.rows.item(i).nombre,
            clave: res.rows.item(i).clave,
            foto: res.rows.item(i).foto,
            fk_id_rol: res.rows.item(i).fk_id_rol

          });
        }
      }
      this.listausuario.next(items);
    });
  }
  //comuna
  fetchComuna(): Observable<Comuna[]> {
    return this.listaComuna.asObservable();
  }


  buscarComuna() {
    //realizamos la consulta a la BD
    return this.database.executeSql('SELECT * FROM comuna', []).then(res => {
      //variable para guardar los registros en una coleccion de datos de la clase noticia
      let items: Comuna[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idComuna: res.rows.item(i).id_comuna,
            nombreComuna: res.rows.item(i).nombreComuna
          });
        }
      }
      this.listaComen.next(items);
    })
  }


buscarComen(){
  //realizamos la consulta a la BD
  return this.database.executeSql('SELECT * FROM comentario',[]).then(res=>{
    //variable para guardar los registros en una coleccion de datos de la clase noticia
    let items: Comentario[] = [];
    if(res.rows.length > 0){
      for(var i=0; i < res.rows.length; i++){
        items.push({
          idComentario : res.rows.item(i).idComentario,
          comentario : res.rows.item(i).comentario,
          iduser : res.rows.item(i).fk_iduser
        });

      }
    }
    this.listaComen.next(items);

  })
}


agregarComen(comentario){
  let data = [comentario];
  return this.database.executeSql('INSERT INTO comentario(comentario) VALUES(?)',data).then(res=>{
    this.buscarComen();
    this.presentAlert("Comentario Añadido")
  });

}



//ALERTAS //
async presentAlert(msj: string) {
  const alert = await this.alertController.create({
    message: msj,
    buttons: ['OK'],
  });

  await alert.present();
}

async presentAlert1(msj: string,men: string) {
  const alert = await this.alertController.create({
    header: men,
    message: msj,
    buttons: ['OK'],
  });

  await alert.present();
}



}

