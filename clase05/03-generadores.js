function* generador() {
	console.log("Generador ejecutado");
	yield "Pausa 1"
	console.log("Generador ejecutado2");
	yield "Pausa 2";
	console.log("Generador ejecutado3");
}

const generate = generador();
generate.next();
generate.next();
generate.next();