import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Servidor } from './servidor.component';
import { Botonera } from './botonera.component';
import { Listado } from './listado.component';
import { Detalle } from './detalle.component';
import { Formulario } from './formulario.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

@NgModule({
  declarations: [
	AppComponent,
	Listado,
	Detalle,
	Formulario,
	PlantillaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  //bootstrap: [Servidor]
  bootstrap: [AppComponent,Listado,Detalle,Formulario]
})
export class AppModule { }
