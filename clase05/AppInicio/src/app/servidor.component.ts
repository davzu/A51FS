import {Component} from "@angular/core"

// export me va a permitir llamar a esta clase desde otros lados
@Component({
	selector: "app-servidor", // selector de etiqueta <app-servidor></app-servidor>
	//selector: ".app-servidor", // selector de clase <div class="app-servidor"></div>
	//selector: "[app-servidor]", // selector de atributo <div app-servidor></div>
	
	//template: "<h1>Servidor Principal</h1>"
	templateUrl: "./servidor.component.html",

	/*
	styles: [
		'h1 {color: red}'
	]
	*/
	styleUrls: ["./servidor.component.css"]
})
export class Servidor {

}