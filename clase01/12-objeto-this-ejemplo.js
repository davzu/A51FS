function Usuario() {
	this.id = 10;
	this.userName = "lib001";
	const id2 = 20;
	const userName2 = "lib002";

	this.listarTareas = () => {
		console.log(this.userName + " tiene 10 tareas");
	}

	this.listarTareas2 = () => {
		console.log(userName2 + " tiene 20 tareas")
	}
}

// La palabra this los convierte en público
// Si quiero que sea privada utilizao las palabras const, let o var

const usuario = new Usuario();
usuario.listarTareas();
usuario.listarTareas2();

