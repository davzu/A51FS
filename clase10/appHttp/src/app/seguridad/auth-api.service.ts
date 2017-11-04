import { IUsuario } from '../nucleo/interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { rutaApi } from '../nucleo/constantes';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthApiService {

	/*usuarios: IUsuario[] = [
		{ id: 1, email: "david@correo.com", password: "123", createdAt: "2017-11-01", updateAt: "2017-11-04" },
		{ id: 2, email: "juan@correo.com", password: "123", createdAt: "2017-11-01", updateAt: "2017-11-04" },
		{ id: 3, email: "carla@correo.com", password: "123", createdAt: "2017-11-01", updateAt: "2017-11-04" }
	];*/

	constructor(private http: HttpClient) { }

	registro(usuario: IUsuario): Observable<IUsuario> {
		return this.http.post<IUsuario>(`${rutaApi}/usuario`, usuario, {
			observe: "response", responseType: "json"
		});


		/*const observador: Observable<IUsuario> = Observable.create(
			(observer: Observer<IUsuario>) => {
				setTimeout(() => {
					const registro: IUsuario = this.usuarios.find(usuario => usuario.email.toUpperCase() === usuario.email.toUpperCase() && usuario.password === usuario.password);

					observer.next(registro);
				}, 1500);
			}
		);

		return observador;*/


	}

}
