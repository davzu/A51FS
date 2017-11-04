import { IUsuario } from '../nucleo/interfaces';
import { AuthApiService } from './auth-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class AutenticacionService {

	usuario: IUsuario;

	constructor(private authApiService: AuthApiService) { }

	login(usuario: IUsuario) {

	}

	logout() {

	}

	registro(usuario: IUsuario): Observable<HttpResponse<IUsuario>> {
		return this.authApiService.registro(usuario);
	}

	obtenerToken() {

	}

}
