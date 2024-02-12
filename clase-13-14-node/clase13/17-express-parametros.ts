import express = require("express");
import { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const usuarios = [
	{ nombre: "David", area: 1 },
	{ nombre: "Pedro", area: 1 },
	{ nombre: "Javier", area: 2 },
	{ nombre: "Cecilia", area: 3 },
	{ nombre: "César", area: 2 },
	{ nombre: "Jaime", area: 1 }
]

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.sendFile(`${__dirname}/home.html`);
});

app.get("/usuarios/:area", (req: Request, res: Response, next: NextFunction) => {
	// + delante lo convierte en entero
	const area = +req.params.area;
	const personas = usuarios.filter(usuario => usuario.area === area);

	res
		.status(200)
		.type("application/json")
		.json(personas);
});


app.listen(5000, () => {
	console.log("Servidor ejecutándose en el puerto 5000");
});
