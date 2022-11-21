import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { Apiservices2Service } from './apiservices2.service';

describe('Apiservices2Service', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: Apiservices2Service;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new Apiservices2Service(httpClientSpy as any);
  });

  beforeEach(waitForAsync(async () => {

    await TestBed.configureTestingModule({
      imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, Camera, Geolocation, NativeStorage,Storage],
      schemas: [NO_ERRORS_SCHEMA],

    }).compileComponents();

  }));

  //PRUEBA UNITARIA USUARIOS
  it('Deberia devolver los USUARIOS esperados de  (HttpClient llamado una vez)', () => {
    const expectedUsers = [
      { id: 1, nombre: 'A' },
      { id: 2, nombre: 'B' }
    ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));

    service.getUsers();

    expect(service.users.length).toBe(2);
    expect(service.users[0]['nombre']).toBe('A');
    expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
  });

    //PRUEBA UNITARIA AUTOS
    it('Deberia devolver los AUTOS esperados de  (HttpClient llamado una vez)', () => {
      const expectedUsers = [
        { id: 1, nombre: 'A' },
        { id: 2, nombre: 'B' }
      ];
  
      httpClientSpy.get.and.returnValue(of(expectedUsers));
  
      service.getUsers();
  
      expect(service.users.length).toBe(2);
      expect(service.users[0]['nombre']).toBe('A');
      expect(httpClientSpy.get.calls.count()).toBe(1, 'una llamada');
    });

    //PRUEBA UNITARIA AUTOS
    it('Deberia devolver los AUTOS esperados de LARGO 2', () => {
      const expectedUsers = [
        { id: 1, nombre: 'A' },
        { id: 2, nombre: 'B' }
      ];
  
      httpClientSpy.get.and.returnValue(of(expectedUsers));
  
      service.getUsers();
  
      expect(service.users.length).toBe(2);
    });

        //PRUEBA UNITARIA USUARIOS
        it('Deberia devolver los USUARIOS esperados de LARGO 2', () => {
          const expectedUsers = [
            { id: 1, nombre: 'A' },
            { id: 2, nombre: 'B' }
          ];
      
          httpClientSpy.get.and.returnValue(of(expectedUsers));
      
          service.getUsers();
      
          expect(service.users.length).toBe(2);
        });

            //PRUEBA UNITARIA AUTOS
    it('Deberia devolver los AUTOS esperados con el PRIMER VALOR "A"', () => {
      const expectedUsers = [
        { id: 1, nombre: 'A' },
        { id: 2, nombre: 'B' }
      ];
  
      httpClientSpy.get.and.returnValue(of(expectedUsers));
  
      service.getUsers();
  
      expect(service.users[0]['nombre']).toBe('A');
    });

    //PRUEBA UNITARIA USUARIOS
  it('Deberia devolver los USUARIOS esperados con el SEGUNDO VALOR "B"', () => {
    const expectedUsers = [
      { id: 1, nombre: 'A' },
      { id: 2, nombre: 'B' }
    ];
    httpClientSpy.get.and.returnValue(of(expectedUsers));
    service.getUsers();
    expect(service.users[1]['nombre']).toBe('B');
  });

});