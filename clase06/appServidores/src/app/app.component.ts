import { Component } from '@angular/core';
import { Servidor } from './compartido/servidor';
import { Libro } from './compartido/libro';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	/*
	servidores: Array<{nombre: string, estado: string, descripcion:string, area:string}> = [
	  {nombre: "Firewall", estado: "activo", descripcion: "Uso exclusivo del area de seguridad", area: "Seguridad"},
	  {nombre: "Web Piloto", estado: "activo", descripcion: "Usado por el proyecto Piloto20", area: "Desarrollo"}
	]
  */

	servidorSeleccionado: Servidor;

	servidores: Array<Servidor> = [
		new Servidor("Firewall", "activo", "Uso exclusivo del area de seguridad", "Seguridad"),
		new Servidor("Web Piloto", "activo", "Usado por el proyecto Piloto20", "Desarrollo")
	];

	libros: Array<Libro> = [
		new Libro("La ciudad y los perros","Mario Vargas Llosa","111111111111111"),
		new Libro("Crónica de una muerta anunciado","Gabriel García Márquez","2222222222222222")
	];

	seleccionServer(servidor: Servidor) {
		this.servidorSeleccionado = servidor;
	}

}
