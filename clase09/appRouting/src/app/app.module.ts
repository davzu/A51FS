import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApproutingModule} from './app.routing.module'

import { AppComponent } from './app.component';
import { CabeceraComponent } from "app/cabecera/cabecera.component";
import { SeguridadService } from "app/auth/seguridad.service";
import { ServidoresService } from "app/servidores/servidores.service";


@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent
	],
	imports: [
		BrowserModule,
		ApproutingModule
	],
	providers: [ServidoresService, SeguridadService],
	bootstrap: [AppComponent]
})
export class AppModule { }
