import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRoutingModule } from '../app.routing.module';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HomeComponent,
		CabeceraComponent
	],
	imports : [
		FormsModule,
		CommonModule,
		AppRoutingModule
	],
	exports: [
		CabeceraComponent,
		AppRoutingModule
	]
})
export class NucleoModule {

}