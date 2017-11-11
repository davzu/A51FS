import { ServidoresService } from '../servidores.service';
import { IServidor } from '../iservidor.interface';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	servidores: IServidor[];

	constructor(private servidoresService: ServidoresService, private router: Router, private rutaActual: ActivatedRoute) { }

	ngOnInit() {
		this.listar();
	}

	listar() {
		// 2 ventos, cuando llega data y cuando hay un error
		this.servidoresService.listado()
			.subscribe(
			(registros: IServidor[]) => this.servidores = registros,
			(error: Error) => console.log(error.message)
			);
	}

	nuevo() {
		// this.router.navigate(["servidores", "nuevo"]);
		this.router.navigate(["nuevo"], { relativeTo: this.rutaActual });
	}

	eliminar(servidor: IServidor) {
		this.servidoresService.eliminar(servidor.idServidor)
			.subscribe(
			(registro: IServidor) => {
				this.listar();
			},
			(error: Error) => console.log(error.message)
			);
	}


}
