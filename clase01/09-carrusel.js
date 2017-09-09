const animales = document.querySelectorAll(".animal");
const listaClases = ["animal04","animal03","animal02","animal01","animal05","animal06","animal07"];

const boton = document.getElementsByTagName("button")[0];

function asignar() {
	animales.forEach(function(animal,indice){
		animal.classList.remove("animal01","animal02","animal03","animal04","animal05","animal06","animal07")
		animal.classList.add(listaClases[indice]);
	})
}

function mover() {
	const ultimo = listaClases.pop()
	console.log(ultimo)
	listaClases.unshift(ultimo);

	asignar();
	asignar();
}

boton.addEventListener("click", function(){
	mover();
})

asignar();

setInterval(function(){
	mover();
},2000);
