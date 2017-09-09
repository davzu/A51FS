function nombreCompleto(nombre,apellido) {
	const completo = nombre + " " + apellido;
	return completo;
}

// JS5
const nombreCompleto1 = function (nombre,apellido) {
	const completo = nombre + " " + apellido;
	return completo;
}

// JS6
const nombreCompleto2 = (nombre,apellido) => {
	return nombre + " " + apellido;
}

const nombreCompleto3 = (nombre,apellido) => nombre + " " + apellido;

console.log(nombreCompleto3("Javier","León"));

const mayuscula1 = (palabra) => palabra.toUpperCase();
console.log(mayuscula1("abcde"));

const mayuscula2 = palabra => palabra.toUpperCase();
console.log(mayuscula1("fghij"));










