const promesa = new Promise((resolve, reject) => {
	console.log("PRE-PROMESA");
	setTimeout (() => {
		console.log("PROMESA");
		resolve();
		reject();
	}, 1);
});

console.log("1");
promesa.then(() => {
	console.log("Promesa cumplida");
});


promesa.then(() => {
	console.log("Promesa cumplida2");
});

console.log("2");
promesa.catch(() => {
	console.log("Promesa rechazada");
});
