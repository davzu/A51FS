import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../auth/seguridad.service'
import { Router } from '@angular/router'
import { NgModel } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	username: string;
	password: string;
	usuarioLogueado: boolean;

	constructor(private seguridadService: SeguridadService, private ruteador: Router) { }

	ngOnInit() {
		this.usuarioLogueado = this.seguridadService.estaAutenticado();

		this.seguridadService.cambioEstado.subscribe(
			estado => {
				this.usuarioLogueado = estado;
			}
		);
	}

	login() {
		this.seguridadService.login(this.username, this.password);
	}

	logout() {
		this.seguridadService.logout();
	}

}
