import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ApproutingModule} from './app.routing.module'

import { AppComponent } from './app.component';
import { CabeceraComponent } from "app/cabecera/cabecera.component";


@NgModule({
	declarations: [
		AppComponent,
		CabeceraComponent
	],
	imports: [
		BrowserModule,
		ApproutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
