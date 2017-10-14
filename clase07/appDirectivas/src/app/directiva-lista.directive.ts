import { Directive, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appDirectivaLista]'
})
export class DirectivaListaDirective implements OnInit {

	constructor(private elementRef: ElementRef) { }

	@HostListener("keydown", ["$event"]) keydown(event: KeyboardEvent) {
		//this.element.nativeElement.style.backgroundColor = this.colorPorDefecto;
		if (event.keyCode === 13) {
			console.log("KEYDOWN ENTER");
			const selectorDepartamento = document.querySelector("#listDepartamentos");
			const elementoAnterior = selectorDepartamento.innerHTML;
			const elementoDepartamento = `${elementoAnterior}<option>${this.elementRef.nativeElement.value}</option>`;
			selectorDepartamento.innerHTML = elementoDepartamento;
			this.elementRef.nativeElement.value = "";
		}
	}

	ngOnInit() {
	}
}
