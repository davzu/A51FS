import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
// import { AutenticacionService } from './seguridad/autenticacion.service';
import { Injectable } from "@angular/core";
import { HttpEvent } from "@angular/common/http";

@Injectable()
export class AppInterceptor implements HttpInterceptor {


	// constructor(private autenticacion: AutenticacionService) { } ciclica error

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = localStorage.getItem("token");

		const clon = req.clone({ headers: req.headers.append("Authorization", `Bearer ${token}`) });
		return next.handle(clon);
	}

}