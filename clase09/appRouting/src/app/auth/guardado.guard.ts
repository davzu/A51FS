import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import {EditarServidorComponent} from '../servidores/editar-servidor/editar-servidor.component';

interface canDeactivateComponent {
	canDeactivate: () => boolean;
}

@Injectable()
export class GuardadoGuard implements CanDeactivate<canDeactivateComponent> {
	canDeactivate(component: canDeactivateComponent): boolean {
		if (component.canDeactivate) {
			//const comp:EditarServidorComponent = (EditarServidorComponent) component;
			if (confirm("Hay datos no salvados, ¿Quieres salvarlos?")) {
				return false; // no saldré de la ruta
			}

			return true;
		}

		return true;
	}
}
