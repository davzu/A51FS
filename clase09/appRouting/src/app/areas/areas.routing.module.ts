import { NgModule } from "@angular/core/";
import { Routes, RouterModule } from "@angular/router";
import { ListadoAreasComponent } from "app/areas/listado/listado.component";
import { DetalleAreaComponent } from "app/areas/detalle-area/detalle-area.component";
import { EditarAreaComponent } from "app/areas/editar-area/editar-area.component";
import { AutorizacionGuard } from "app/auth/autorizacion.guard";
import { AutenticacionGuard } from "app/auth/autenticacion.guard";

const rutas: Routes = [
	{ path: "", component: ListadoAreasComponent, children:[
		{path:"detalle" ,component:DetalleAreaComponent, canActivate:[AutenticacionGuard]},
		{path:"editar" ,component:EditarAreaComponent}
	] }
]

@NgModule({
	declarations: [ListadoAreasComponent,DetalleAreaComponent, EditarAreaComponent],
	imports: [
		RouterModule.forChild(rutas)
	],
	providers: [AutorizacionGuard]
})
export class AreasRoutingModule {

}