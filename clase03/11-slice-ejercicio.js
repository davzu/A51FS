const historias = [
	{id:1 , numHistoria: "2017-1", nombres: "David", apellidoPat: "Zuzunaga", edad: 27},
	{id:2 , numHistoria: "2017-2", nombres: "Jaime", apellidoPat: "Pacheco", edad: 23},
	{id:3 , numHistoria: "2017-3", nombres: "Fernando", apellidoPat: "Avilés", edad: 21},
	{id:4 , numHistoria: "2017-4", nombres: "Peter", apellidoPat: "Guzmán", edad: 40},
	{id:5 , numHistoria: "2017-5", nombres: "Natalia", apellidoPat: "Peralta", edad: 30},
	{id:6 , numHistoria: "2017-6", nombres: "Juan", apellidoPat: "Parrales", edad: 23},
	{id:7 , numHistoria: "2017-7", nombres: "Pedro", apellidoPat: "Castillo", edad: 34},
	{id:8 , numHistoria: "2017-8", nombres: "Carmen", apellidoPat: "Paz", edad: 33},
	{id:9 , numHistoria: "2017-9", nombres: "Michelle", apellidoPat: "Esteban", edad: 55},
	{id:10 , numHistoria: "2017-10", nombres: "Fabiola", apellidoPat: "Bardales", edad: 32},
	{id:11 , numHistoria: "2017-11", nombres: "Christian", apellidoPat: "Pasco", edad: 64},
	{id:12 , numHistoria: "2017-12", nombres: "Johana", apellidoPat: "García", edad: 23},
	{id:13 , numHistoria: "2017-13", nombres: "Armando", apellidoPat: "Ramírez", edad: 63},
	{id:14 , numHistoria: "2017-14", nombres: "Jimena", apellidoPat: "Céspedes", edad: 22}
];

// {id: , numHistoria: "2017-", nombres: "", apellidoPat: "", edad: },

let tbody = document.querySelector("tbody");

// paginacion

const contenedorBotones = document.querySelector("#contenedorBotones");
// ${}

// calcular número de páginas (cada página de 4 filas)
const numFilasPorPagina = 4;
let numFilas = historias.length;
let numPaginas = Math.ceil(numFilas / numFilasPorPagina);

console.log("******* filas " + numFilas);
console.log("******* paginas " + numPaginas);

paginacionTabla = function() {
	let botonesComportamiento = document.querySelectorAll(".botonPaginacion");
	botonesComportamiento.forEach( boton => {
		boton.addEventListener("click", function(e) {
			const pagina = boton.innerText;
			paginacion(pagina);
		});
	});
	
}

paginacion = function(pagina) {
	const bloque = (pagina * numFilasPorPagina);
	const filas = historias.slice(bloque - numFilasPorPagina, bloque);
	let fila = "";

	filas.forEach(historia => {
		fila += `
		<tr>
			<td>${historia.id}</td>
			<td>${historia.numHistoria}</td>
			<td>${historia.nombres}</td>
			<td>${historia.apellidoPat}</td>
			<td>${historia.edad}</td>
		</tr>
	`;
	});

	tbody.innerHTML = fila;
}

let botones = "";
for(let i = 0; i < numPaginas; i++) {
	botones += `<button class="botonPaginacion" id="pagina${i + 1}">${i + 1}</button> `;
}

contenedorBotones.innerHTML = botones;

paginacionTabla();
paginacion(1);
