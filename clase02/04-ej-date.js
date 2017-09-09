const fechaNavidad = new Date("2017-12-25 00:00:00");
const tiempoHastaNavidad = fechaNavidad.getTime();

const dias = document.querySelector(".dias");
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");


const actualizar = () => {
	const fechaTiempo = new Date();
	const tiempoTranscurrido = fechaTiempo.getTime();
	let tiempoFaltaNavidad = tiempoHastaNavidad - tiempoTranscurrido;
	let segundosCalculo = tiempoFaltaNavidad / 1000;
	let acumuladorSeg = 0;

	let diasRestantes = Math.floor(segundosCalculo / (3600 * 24));
	acumuladorSeg += (diasRestantes * 3600 * 24);

	let horasRestantes = Math.floor((segundosCalculo - acumuladorSeg) / 3600);
	acumuladorSeg += horasRestantes * 3600;

	let minutosRestantes = Math.floor((segundosCalculo - acumuladorSeg) / 60);
	acumuladorSeg += minutosRestantes * 60;

	let segundosRestantes = Math.floor(segundosCalculo - acumuladorSeg);

	dias.innerHTML = `${((diasRestantes < 10) ? "0" : "") + diasRestantes} días`;
	horas.innerHTML = `${((horasRestantes < 10) ? "0" : "") + horasRestantes} horas`;
	minutos.innerHTML = `${((minutosRestantes < 10) ? "0" : "") + minutosRestantes} minutos`;
	segundos.innerHTML = `${((segundosRestantes < 10) ? "0" : "") + segundosRestantes} segundos`;

}

setInterval(function () {
	actualizar();
}, 1000);
