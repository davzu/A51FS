import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit(): void {
		/*const observador: Observable<string> = Observable.create(
			(observer: Observer<string>) => {
				setTimeout(() => {
					observer.next("Etapa 1 cumplida");
				}, 2000)

				setTimeout(() => {
					observer.next("Etapa 2 cumplida");
				}, 4000)

				setTimeout(() => {
					observer.complete();
				}, 5000)

				setTimeout(() => {
					observer.error("Se  cayó la Internet");
				}, 6000)

				setTimeout(() => {
					observer.next("Etapa 4 cumplida");
				}, 8000)
			}
		);

		observador.subscribe(
			(data:string) => console.log(data), // 1er argumento para next, el error no será capturado
			(data:string) => console.log(data), // 2do argumento para error, el error es capturado
			() => console.log("Se completo") // 3er argumento para complete
		);*/

	}

	title = 'app';
}
