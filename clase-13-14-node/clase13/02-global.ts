console.log("Inicio del proceso principal");

setTimeout(() => {
	console.log("settimeout ejecutado");
});

setImmediate(() => {
	console.log("setImmediate");
});

process.nextTick(()=> {
	console.log("nextTick ejecutado");
});

console.log("Fin del proceso principal");

// retorna el directorio del archivo que se está ejecutando
console.log(__dirname);

// retorna el nombre del archivo que se está ejecutando
console.log(__filename);




