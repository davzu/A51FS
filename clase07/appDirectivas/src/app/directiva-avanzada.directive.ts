import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDirectivaAvanzada]'
})
export class DirectivaAvanzadaDirective {

	@Input() colorPorDefecto: string;
	@Input() colorHover: string;
	@Input("appDirectivaAvanzada") directiva: string;
	@Output("fechaHoy") fechaHoy = new EventEmitter<Date>();

	constructor(private element: ElementRef) { }

	@HostBinding("style.backgroundColor") colorFondo: string;

	@HostListener("mouseenter") mouseenter() {
		/*
		this.element.nativeElement.style.backgroundColor = this.colorHover;
		this.element.nativeElement.style.backgroundColor = this.directiva;
		*/

		this.colorFondo = this.directiva;

		const span = document.createElement("span");
		span.innerHTML = "Etiqueta span";
		this.element.nativeElement.appendChild(span);

	}

	@HostListener("mouseleave") mouseleave() {
		//this.element.nativeElement.style.backgroundColor = this.colorPorDefecto;
		this.colorFondo = this.colorPorDefecto;
		this.fechaHoy.emit(new Date());
	}

}
