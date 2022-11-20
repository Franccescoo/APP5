import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { MapaConductorPage } from './mapa-conductor.page';

describe('MapaConductorPage', () => {
  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

    beforeEach(waitForAsync(async () => {

    await TestBed.configureTestingModule({
      imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, Camera, Geolocation, NativeStorage,Storage],
      schemas: [NO_ERRORS_SCHEMA],

    }).compileComponents();
  }));

  it('should create', () => {

  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(MapaConductorPage);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it('should initialize the app', async () => {
  //   TestBed.createComponent(MapaConductorPage);
  //   expect(platformSpy.ready).toHaveBeenCalled();
  //   await platformReadySpy;
  //   expect(statusBarSpy.styleDefault).toHaveBeenCalled();
  //   expect(splashScreenSpy.hide).toHaveBeenCalled();
  // });

  // TODO: add more tests!

});