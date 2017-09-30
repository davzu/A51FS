const usuario = {
	nombre: "David",
	edad: 27
}

// el objeto Proxy actúa como intermediario entre la llamada o asignación y el objeto original
// podría utilizarse para las validaciones en el input

const usuarioProxy = new Proxy(usuario, {
	get(target, propiedad){
		if(typeof(target[propiedad]) === "string"){
			return target[propiedad].toLowerCase();
		} else {
			return target[propiedad];
		}
	},
	set(target, propiedad, valor) { // target hace referencia a la variable usuario, propiedad de las variables (nombre, edad), valor que se va a poner
		target[propiedad] = valor.toUpperCase();
	}

});

usuarioProxy.nombre = "Javier";
console.log(usuario.nombre);
console.log(usuarioProxy.nombre);
console.log(usuarioProxy.edad);



