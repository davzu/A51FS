import { IServidor } from './iservidor.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from '../seguridad/autenticacion.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ServidoresApiService {

	constructor(private autenticacion: AutenticacionService, private http: HttpClient) { }

	// method get
	listado(): Observable<IServidor[]> {
		// httpModule ---> Headers
		// httpClientModule ---> HttpHeaders

		// const token: string = this.autenticacion.obtenerToken();
		// const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` });
		// return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
		// 	observe: "body", responseType: "json", headers: headers
		// })

		return this.http.get<IServidor[]>("http://localhost:1337/servidores", {
			observe: "body", responseType: "json"
		})


	}

	// method: post
	insertar(servidor: IServidor): Observable<IServidor> {
		// const token: string = this.autenticacion.obtenerToken();
		// const headers: HttpHeaders = new HttpHeaders({ "Authorization": `Bearer ${token}` });
		// return this.http.post<IServidor>("http://localhost:1337/servidores", servidor, {
		// 	observe: "body", responseType: "json", headers: headers
		// })

		return this.http.post<IServidor>("http://localhost:1337/servidores", servidor, {
			observe: "body", responseType: "json"
		})
	}

	eliminar(idServidor: number): Observable<IServidor> {
		return this.http.delete<IServidor>(`http://localhost:1337/servidores/${idServidor}`);
	}

	actualizar(servidor: IServidor): Observable<IServidor> {
		return this.http.put<IServidor>(`http://localhost:1337/servidores/${servidor.idServidor}`,servidor);
	}

	detalle(idServidor:number) :Observable<IServidor> {
		return this.http.get<IServidor>(`http://localhost:1337/servidores/${idServidor}`, {
			observe: "body", responseType: "json"
		})
	}

}
