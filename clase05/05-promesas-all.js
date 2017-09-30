const promesa01 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promesa 01");
		resolve();
	}, 4000);
});

const promesa02 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promesa 02");
		resolve();
	}, 3000);
});

// Promise.all([......]) recibe un arreglo de promesas
// las promesas se ejecutan independientemente
Promise.all([promesa01, promesa02])
	.then(()=>{
		console.log("Todas las promesas cumplidas");
	});


