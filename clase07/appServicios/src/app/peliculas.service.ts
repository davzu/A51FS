import { Injectable } from '@angular/core';
import { Pelicula } from './compartido/pelicula';

@Injectable()
export class PeliculasService {

	peliculas: Array<Pelicula> = [
		new Pelicula("El Gladiador", "Un general que desafió a un imperio", 2005, "Acción", []),
		new Pelicula("El Perfume", "Historia de un asesino obsesionado con obtener la escencia que domine al mundo", 2010, "Suspenso", []),
		new Pelicula("El Náufrago", "Basada en una historia real de un accidente aéreo", 2003, "Drama", [])
	];

	constructor() { }

}
