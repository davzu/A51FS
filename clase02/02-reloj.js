const segundero = document.querySelector(".segundero");

// cada segundo se desplazará 6 grados
const despSegundero = 6;

let anguloSegundero = -90;

const mover = () => {
	anguloSegundero += despSegundero;
	segundero.style.transform = `rotate(${anguloSegundero}deg)`;
}

setInterval(function(){
	mover();
},1000);

mover();



