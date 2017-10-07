import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../compartido/libro';

@Component({
	selector: 'app-libros',
	templateUrl: './libros.component.html',
	styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

	@Input() lstLibros: Array<Libro>;

	constructor() { }

	ngOnInit() {
	}

}
