import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';

const rutas: Routes = [
	{path:"", component: HomeComponent},
	{path:"listado", component: ListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
