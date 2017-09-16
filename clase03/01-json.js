const usuario = {}

console.log(usuario);

const persona = {
	nombre: "David",
	institucion: "Area51",
	cursos: ["HTML5", "Javascript", "Angular", "Node", "Phaser"]
}

console.log(persona);

persona.edad = 20;

console.log(persona);

persona.nombre = "José"

console.log(persona);

for (let clave in persona) {
	console.log(clave);
}

const productos = {
	"-abc": {nombre: "David", edad:20},
	"-bcd": {nombre: "Javier", edad:25},
	"-efg": {nombre: "Raúl", edad:30},
	"-hij": {nombre: "Carmen", edad:45}
}

// persona.nombre
// persona["nombre"]

let filas = "";

for (let clave in productos) {
	console.log(productos[clave]);
	filas += `
		<tr>
			<td>${productos[clave].nombre}</td>
			<td>${productos[clave]["edad"]}</td>
		</tr>
	`;
}

console.log(filas);
	
