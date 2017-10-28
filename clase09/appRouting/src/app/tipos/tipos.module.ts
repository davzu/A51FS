import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposRoutingModule } from './tipos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { DetalleTiposComponent } from './detalle-tipos/detalle-tipos.component';
import { EditarTiposComponent } from './editar-tipos/editar-tipos.component';

@NgModule({
  imports: [
    CommonModule,
    TiposRoutingModule
  ],
  declarations: [ListadoComponent, DetalleTiposComponent, EditarTiposComponent]
})
export class TiposModule { }
