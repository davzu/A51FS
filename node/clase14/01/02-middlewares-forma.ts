// Declaraciones
import express = require("express");
import { Application, Request, Response, NextFunction } from 'express';

// Settings
const app: Application = express();

// Middlewares
const ftnAutorizado = (req: Request, res: Response, next: NextFunction) => {
	const autorizado = req.query.autorizado || "";

	if (autorizado != "si") {
		return res
			.status(401)
			.type("text/plain")
			.send("No autorizado");
	}

	next();
}

const ftnRol = (req: Request, res: Response, next: NextFunction) => {
	const rol = req.query.rol || "";

	if (rol != "admin") {
		return res
			.status(401)
			.type("text/plain")
			.send("Debe ser un admin");
	}

	next();
}

// Rutas
app.get("/", ftnAutorizado, ftnRol, (req: Request, res: Response, next: NextFunction) => {
	/*res.status(200);
	res.type("text/html");
	res.send("<strong>Todo está ok</strong>");
	*/

	res
		.status(200)
		.type("text/html")
		.send("<strong>Todo está ok</strong>");

});


// Servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000");
});
