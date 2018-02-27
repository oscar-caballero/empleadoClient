import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {APP_ROUTING } from './app.routes';

import {EmpleadosService } from './services/empleados.service';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponentComponent } from './components/empleados/empleados-component.component';
import { LlavesPipe } from './pipes/llaves.pipe';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadosComponentComponent,
    LlavesPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDZsXssjK2ArEH0oomQ4Y-cyw7boTjJqCY'}),
  ],
  providers: [ EmpleadosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
