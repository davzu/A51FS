const fechaTiempo = new Date();
const fechaNavidad = new Date("2017-12-25 00:00:00");

const tiempoTranscurrido = fechaTiempo.getTime();
const tiempoHastaNavidad = fechaNavidad.getTime();

let tiempoFaltaNavidad = tiempoHastaNavidad - tiempoTranscurrido;

console.log(tiempoFaltaNavidad);

console.log("=========")

let segundosCalculo = tiempoFaltaNavidad / 1000;
console.log(segundosCalculo);
let acumuladorSeg = 0;

let diasRestantes = Math.floor(segundosCalculo / (3600 * 24));
acumuladorSeg += (diasRestantes * 3600 * 24);
console.log(diasRestantes);

let horasRestantes = Math.floor((segundosCalculo - acumuladorSeg) / 3600);
acumuladorSeg += horasRestantes * 3600;
console.log(horasRestantes);

let minutosRestantes = Math.floor((segundosCalculo - acumuladorSeg)/ 60);
acumuladorSeg += minutosRestantes * 60;
console.log(minutosRestantes);

let segundosRestantes = Math.floor(segundosCalculo - acumuladorSeg);
console.log(segundosRestantes);












