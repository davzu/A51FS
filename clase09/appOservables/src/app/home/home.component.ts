import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	constructor(private router: Router) { }

	suscripcion: Subscription;

	ngOnInit() {
		const numeros = Observable.interval(1000);

		this.suscripcion = numeros.subscribe(
			(num: Number) => console.log(num)
		);

		setTimeout(() => {
			console.log("oijpoijpoij")
			this.router.navigate(["listado"]);
		}, 5000);
	}

	ngOnDestroy(): void {
		this.suscripcion.unsubscribe();
	}

}
