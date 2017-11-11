import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NucleoModule } from './nucleo/nucleo.module';
import { AppRouting } from './app-routing.module';
import { AutenticacionService } from './seguridad/autenticacion.service';
import { AuthApiService } from './seguridad/auth-api.service';
import { AutenticacionGuard } from './seguridad/autenticacion.guard';
import { AppInterceptor } from './app.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NucleoModule
	],
	providers: [AutenticacionService, AuthApiService, AutenticacionGuard,
		// multi:true => que un interceptor pueda ser usado en otros interceptores
		{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor ,multi:true}],
	bootstrap: [AppComponent]
})
export class AppModule { }
