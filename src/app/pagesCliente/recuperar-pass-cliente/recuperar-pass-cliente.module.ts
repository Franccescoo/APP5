import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RecuperarPassClientePageRoutingModule } from './recuperar-pass-cliente-routing.module';

import { RecuperarPassClientePage } from './recuperar-pass-cliente.page';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RecuperarPassClientePageRoutingModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [RecuperarPassClientePage]
})
export class RecuperarPassClientePageModule {}
