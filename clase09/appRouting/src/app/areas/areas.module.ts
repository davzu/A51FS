
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router/";
import { AreasRoutingModule } from "app/areas/areas.routing.module";

@NgModule({
	imports: [
		AreasRoutingModule
	],
	providers: [],
	exports: [RouterModule]
})
export class AreasModule { }