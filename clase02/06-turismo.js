const lugares = document.querySelectorAll("div.lugar");
let controlAnterior;

lugares.forEach(lugar => {
	lugar.addEventListener("click", function () {
		lugares.forEach(lugar => lugar.classList.remove("seleccionado"));
		this.classList.add("seleccionado");
	});

	lugar.addEventListener("transitionend", function () {
		//lugares.forEach(lugar => lugar.classList.remove("desplegar"));

		(controlAnterior) ? controlAnterior.classList.remove("desplegar") : null;

		
		this.classList.add("desplegar");
		controlAnterior = this;
	});

});

