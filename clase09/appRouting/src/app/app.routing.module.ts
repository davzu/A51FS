import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'

import { ListadoComponent } from './servidores/listado/listado.component';
import { HomeComponent } from './home/home.component';
import { DetalleServidorComponent } from './servidores/detalle-servidor/detalle-servidor.component';
import { EditarServidorComponent } from './servidores/editar-servidor/editar-servidor.component'

import { SeguridadGuard } from './auth/auth-seguridad.guards'
import { AutenticacionGuard } from 'app/auth/autenticacion.guard';
import { AutorizacionGuard } from 'app/auth/autorizacion.guard';
import { GuardadoGuard } from 'app/auth/guardado.guard';


import { ServidoresService } from './servidores/servidores.service';
import { SeguridadService } from './auth/seguridad.service';

const rutas: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{
		path: "servidores", component: ListadoComponent, canActivate: [AutenticacionGuard], canActivateChild: [AutenticacionGuard], children: [
			{ path: "detalle/:id", component: DetalleServidorComponent },
			{ path: "editar/:id", component: EditarServidorComponent, canActivate: [AutorizacionGuard], canDeactivate: [GuardadoGuard] }
		]
	},
	{ path: "areas", loadChildren: "./areas/areas.module#AreasModule", canLoad: [AutenticacionGuard] },
	// {path: "**", component:ListadoComponent}
	{ path: "**", redirectTo: "/" }
]

@NgModule({
	declarations: [
		HomeComponent,
		ListadoComponent,
		DetalleServidorComponent,
		EditarServidorComponent
	],
	imports: [
		CommonModule,
		RouterModule.forRoot(rutas),
		FormsModule
	],
	exports: [RouterModule],
	providers: [AutenticacionGuard, AutorizacionGuard, GuardadoGuard]
})
export class ApproutingModule {

}