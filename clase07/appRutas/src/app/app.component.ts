import { Component } from '@angular/core';
import { AppService } from './app.service';
import { PeliculasService } from './peliculas.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [AppService]
})
export class AppComponent {
	title = 'app';

	constructor(private peliculasService: PeliculasService) { }
}
