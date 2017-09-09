var nombre = "David";
let apellidoPaterno = "Hidalgo";
const apellidoMaterno = "Amésquita";

/*
	Por el alcance:
		- var: generar variables globales
		- let, const: su alcance depende dónde estén declaradas
	
	Por inmutabilidad:
		- mutables: var, let
		- inmutable: const
 */

console.log("Tipo de dato ", typeof(nombre));
nombre = 40;
console.log("Tipo de dato ", typeof(nombre));

console.log("Tipo de dato del let ", typeof(apellidoPaterno));
apellidoPaterno = false;
console.log("Tipo de dato del let ", typeof(apellidoPaterno));

console.log("Tipo de dato del let ", typeof(apellidoMaterno));
apellidoMaterno = "Montes"; // Da error porque se le reasigna la variable a String
console.log("Tipo de dato del let ", typeof(apellidoMaterno));

/*
Los variables const se deben declara y definir en la misma línea

Lo siguiente da error
const nombre;
nombre = "David";

Lo correcto
const nombre = "David";

*/




