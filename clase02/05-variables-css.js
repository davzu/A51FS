const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
	input.addEventListener("change", function () {
		const valor = this.value;
		const propiedad = this.getAttribute("id");
		// obtiene el atributo que comiencen con data-
		// en este caso data-unidades
		const unidades = this.dataset.unidades;

		console.log(`--${propiedad}`, `${valor}${unidades}`);

		document.documentElement.style.setProperty(`--${propiedad}`, `${valor}${unidades}`);


	})
});

inputs.forEach(input => {
	input.addEventListener("mousemove", function () {
		const valor = this.value;
		const propiedad = this.getAttribute("id");
		// obtiene el atributo que comiencen con data-
		// en este caso data-unidades
		const unidades = this.dataset.unidades;

		console.log(`--${propiedad}`, `${valor}${unidades}`);

		document.documentElement.style.setProperty(`--${propiedad}`, `${valor}${unidades}`);


	})
});
