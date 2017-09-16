const personas = ["Zulema", "Cinthia", "Gloria", "Alejandra", "Kike"];

// map => transformar un arreglo en otro

let nombres = personas.map(elemento => { return elemento });

console.log("Nombres 1");
nombres.forEach(nombre => {
	console.log(nombre);
});

nombres = personas.map((elemento, indice) => {
	return elemento.toUpperCase()
});

console.log("Nombres 2");
nombres.forEach(nombre => {
	console.log(nombre);
});


const historias = [
	{id:1 , numHistoria: "2017-1", nombres: "David", apellidoPat: "Zuzunaga", edad: 27},
	{id:2 , numHistoria: "2017-2", nombres: "Jaime", apellidoPat: "Pacheco", edad: 23},
	{id:3 , numHistoria: "2017-3", nombres: "Fernando", apellidoPat: "Avilés", edad: 21},
	{id:4 , numHistoria: "2017-4", nombres: "Peter", apellidoPat: "Guzmán", edad: 40},
	{id:5 , numHistoria: "2017-5", nombres: "Natalia", apellidoPat: "Peralta", edad: 30}
]

const nombreCompleto = historia => `${historia.nombres.trim().toUpperCase()} ${historia.apellidoPat}`;

const filas = historias.map(historia => {
	const fila = `
		<tr>
			<td>${historia.id}</td>
			<td>${historia.numHistoria}</td>
			<td>${nombreCompleto(historia)}</td>
			<td>${historia.edad}</td>
		</tr>
	`;

	return fila;
}).join("");

let tbody = document.querySelector("tbody");

tbody.innerHTML = filas;
