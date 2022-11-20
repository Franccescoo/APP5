import { TestBed } from '@angular/core/testing';
import { waitForAsync } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, IonicModule, Platform } from '@ionic/angular';
import { DbservicioService } from './dbservicio.service';

describe('Service: dbservicio', () => {
  let service: DbservicioService;

  beforeEach(() => {
    service = new DbservicioService(SQLite as any,Platform as any, AlertController as any);
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DbservicioService ],
      imports: [IonicModule.forRoot()],
      providers: [SQLite,Platform,AlertController]
    }).compileComponents();

  }));

  // it('#getValue should return real value', () => {
  //   expect(service.getValue()).toBe('real value');
  // });

  // it('#getObservableValue should return value from observable', (done: DoneFn) => {
  //   service.getObservableValue().subscribe((value) => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });

  // it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
  //   service.getPromiseValue().then((value) => {
  //     expect(value).toBe('promise value');
  //     done();
  //   });
  // });
});