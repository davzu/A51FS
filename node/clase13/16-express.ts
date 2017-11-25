import express = require("express");
import { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	// res.status(200);
	// res.type("text/html");
	// res.sendFile("./home.html");

	res
		.status(200)
		.type("text/html")
		.sendFile(`${__dirname}/home.html`);
});

app.get("/pdf", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("application/pdf")
		.sendFile(`${__dirname}/manual.pdf`);
});

app.get("/usuarios/lista", (req: Request, res: Response, next: NextFunction) => {
	const usuarios = [
		{ nombre: "David", rol: "admin" },
		{ nombre: "Pedro", rol: "operador" }
	];
	res
		.status(200)
		.type("application/json")
		.json(usuarios);
});



app.listen(5000, () => {
	console.log("Servidor ejecutándose en el puerto 5000");
});
