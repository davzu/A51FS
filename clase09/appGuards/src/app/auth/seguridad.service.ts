import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

interface IUsuario {
	id: number, nombre: string, username: string, password: string, rol: string;
}

@Injectable()
export class SeguridadService {
	private autenticado: boolean = false

	private usuarios: Array<IUsuario> = [
		{ id: 1, nombre: "David", username: "david", password: "123", rol: "ADMIN" },
		{ id: 2, nombre: "Anónimo", username: "anonimo", password: "123", rol: "OPERADOR" }
	];

	cambioEstado = new EventEmitter<boolean>();

	public usuarioEncontrado: Array<IUsuario>;

	constructor(private ruteador: Router) { }

	login(username: string, password: string) {
		console.log("USERNAME: " + username);
		console.log("PASSWORD: " + password);
		this.usuarioEncontrado = this.usuarios.filter(item => {
			return item.username.toLowerCase() === username.toLocaleLowerCase() && item.password === password;
		});

		console.log("encontrado: " + this.usuarioEncontrado)
		if (this.usuarioEncontrado && this.usuarioEncontrado.length > 0) {
			this.autenticado = true;
			this.cambioEstado.emit(true);
			this.ruteador.navigate(["servidores"]);
		} else {
			this.autenticado = false;
		}
	}

	logout() {
		this.autenticado = false
		this.cambioEstado.emit(false);
	}

	estaAutenticado(): boolean {
		return this.autenticado
	}

}
