import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioComponent } from './listado/formulario/formulario.component';
import { ServidorComponent } from './listado/servidor/servidor.component';
import {FormsModule} from "@angular/forms";
import { LibrosComponent } from './libros/libros.component';
import { DetalleLibrosComponent } from './detalle-libros/detalle-libros.component';
import { LibroComponent } from './libros/libro/libro.component';
import { FormularioLibroComponent } from './libros/formulario-libro/formulario-libro.component';

@NgModule({
  declarations: [
	AppComponent,
	ListadoComponent,
	DetalleComponent,
	FormularioComponent,
	ServidorComponent,
	LibrosComponent,
	DetalleLibrosComponent,
	LibroComponent,
	FormularioLibroComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
