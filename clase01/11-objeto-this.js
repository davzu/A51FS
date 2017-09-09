function Persona() {
	//const self = this;
	this.nombre = "David";
	this.apellido = "Zuzunaga";
	
	/*setInterval(function(){
		console.log(self.nombre)
	},1000)*/

	this.nombreCompleto = () => {
		console.log(this.nombre + " " + this.apellido);
	}

	setInterval(()=>{console.log(this.nombre)},1000);
}

var persona = new Persona();
persona.nombreCompleto();