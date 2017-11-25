// FORMA 1
import {miClase, contador, annoActual, RecursosHumanos, matricula, nombreInstitucion} from './utilitario';

const miclase = new miClase();
console.log(miclase.obtenerFecha());

const usuarios = ["David", "Carmen", "Daphne"];
console.log(contador(usuarios));

console.log(annoActual);

const person = new RecursosHumanos.Personal();
console.log(person.obtenerCapacitaciones);


// FORMA 2
import * as elementos from "./utilitario";
console.log("Forma 2 " + elementos.annoActual);

// FORMA 3
import elements = require("./utilitario");
console.log("Forma 3 " + elements.annoActual);

const personal = new RecursosHumanos.Personal();
console.log(personal.obtenerCapacitaciones());

console.log(matricula.listaAlumnos());
console.log(nombreInstitucion);

// FORMA 4
import "./utilitarioArreglos";

console.log(usuarios["mensaje"]());








