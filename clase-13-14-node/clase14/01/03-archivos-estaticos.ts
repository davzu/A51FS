// Declaraciones
import express = require("express");
import { Application, Request, Response, NextFunction } from 'express';

// Settings
const app: Application = express();

// Middlewares
/*app.use("/assets", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.sendFile(__dirname + "/public" + req.url);

	// si se le envía /assets/img => el req.url retornará /img ya que empieza a validar a partir del /assets
	// no retornará /assets/img
	/*res
		.status(200)
		.type("text/plain")
		.send(req.url);

	*/
//});

// usando express
app.use("/assets", express.static("public"));
//app.use(express.static("public")); // => aplica para cualquier ruta


// Rutas
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res
		.status(200)
		.type("text/html")
		.sendFile(__dirname + "/home.html");

});

// Servidor
app.listen(4000, () => {
	console.log("Ejecutando en el puerto 4000");
});



