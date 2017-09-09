const fechaTiempo = new Date();
const fechaNavidad = new Date("2017-12-25 00:00:00");

const tiempoTranscurrido = fechaTiempo.getTime();

console.log(tiempoTranscurrido);
console.log(fechaNavidad);

const redondear = Math.round(4.5) // 5
console.log(redondear);

const piso = Math.floor(8.999999); // 10 Trunca toda la parte decimal, retorna la parte entera
console.log(piso);

const limiteSuperior01 = Math.ceil(10.0000000001) // 11 Retorna el entero superior sin importar la parte decimal
const limiteSuperior02 = Math.ceil(10.6) // 11
console.log(limiteSuperior01);
console.log(limiteSuperior02);


