import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs';
import { Observer } from "rxjs/Observer";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit(): void {
		/*
		let numeros = Observable.interval(1000);
		numeros.subscribe(
			num => {
				console.log(num);
			}
		);
		*/

		/*
		const observ = Observable.create(
			(observador: Observer<String>) => {
				setTimeout(() => {
					// dispara un evento
					observador.next("Primera emisión");
				}, 3000);

				setTimeout(() => {
					// dispara un evento
					observador.next("Segunda emisión");
				}, 5000);

				setTimeout(() => {
					// dispara un evento
					observador.next("Tercera emisión");
				}, 7000);

				setTimeout(() => {
					// dispara un evento
					observador.complete();
				}, 8000);

				setTimeout(() => {
					// dispara un evento
					observador.error("Ocurrió un error");
				}, 9000);

				setTimeout(() => {
					// dispara un evento
					observador.next("Cuarta emisión");
				}, 11000);
			}
		);

		observ.subscribe(
			(data: string) => {
				console.log(data);
			},
			(error: string) => {
				console.log(error);
			},
			() => {
				console.log("Observable completo");
			}
		);

*/
	}


}
