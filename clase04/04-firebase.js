(function (d, f) {
	d.addEventListener("DOMContentLoaded", () => {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyBHaMk0dfEGkILSESRuUrnSw93PYn0vY8M",
			authDomain: "inventarios-9e408.firebaseapp.com",
			databaseURL: "https://inventarios-9e408.firebaseio.com",
			projectId: "inventarios-9e408",
			storageBucket: "inventarios-9e408.appspot.com",
			messagingSenderId: "572639645647"
		};
		f.initializeApp(config);

		const inputCorreo = d.querySelector("#txtCorreo");
		const inputContrasena = d.querySelector("#txtContrasena");
		const botonLogin = d.querySelector("#btnLogin");
		const botonRegistro = d.querySelector("#btnRegistro");

		botonRegistro.addEventListener("click", function (e) {
			e.preventDefault();
			const correo = inputCorreo.value;
			const contrasena = inputContrasena.value;

			console.log(correo);
			console.log(contrasena);

			f.auth().createUserWithEmailAndPassword(correo, contrasena)
				.then(() => {
					console.log("Usuario registrado");
				})
				.catch(error => {
					console.log(error);
				});
		});

		botonLogin.addEventListener("click", function (e) {
			e.preventDefault();
			const correo = inputCorreo.value;
			const contrasena = inputContrasena.value;

			f.auth().signInWithEmailAndPassword(correo, contrasena)
				.then(() => {
					console.log("logueado");
				})
				.catch(error => {
					console.log(error);
				});
		});

	});
})(document, firebase);