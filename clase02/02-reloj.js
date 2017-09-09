const segundero = document.querySelector(".segundero");
const minutero = document.querySelector(".minutero");
const horario = document.querySelector(".horario");

// cada segundo se desplazará 6 grados

const despSegundero = 6;
const despMinutero = .1;
const despHorario = 0.00833333333;


/*
const despSegundero = 6;
const despMinutero = 2;
const despHorario = 1;
*/

const fechaTiempo = new Date();
const horas = fechaTiempo.getHours();
const minutos = fechaTiempo.getMinutes();
const segundos = fechaTiempo.getSeconds();

let anguloSegundero = -90 + segundos * despSegundero;
let anguloMinutero = -90 + minutos * despMinutero * 60;
let anguloHorario = -90 + horas * despHorario * 60 * 60;

console.log(anguloHorario);
console.log(anguloMinutero);

const mover = () => {
	anguloSegundero += despSegundero;
	anguloMinutero += despMinutero;
	anguloHorario += despHorario;

	segundero.style.transform = `rotate(${anguloSegundero}deg)`;
	minutero.style.transform = `rotate(${anguloMinutero}deg)`;
	horario.style.transform = `rotate(${anguloHorario}deg)`;
}

setInterval(function(){
	mover();
},1000);

mover();



