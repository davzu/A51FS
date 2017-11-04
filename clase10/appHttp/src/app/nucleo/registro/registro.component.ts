import { AutenticacionService } from '../../seguridad/autenticacion.service';
import { IUsuario } from '../interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	email: string;
	password: string;
	//usuarioLogueado: Observable<IUsuario>; // 1ra forma
	usuarioLogueado: HttpResponse<IUsuario>;

	constructor(private autenticacionesService: AutenticacionService) { }

	ngOnInit() {
	}

	registrar() {
		const datos: IUsuario = { email: this.email, password: this.password };
		// this.usuarioLogueado = this.autenticacionesService.registro(datos); // 1ra forma
		this.autenticacionesService.registro(datos).subscribe(
			(registro: HttpResponse<IUsuario>) => this.usuarioLogueado = registro,
			(error: any) => console.log(error)
		);
	}

}
