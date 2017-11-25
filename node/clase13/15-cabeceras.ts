import * as http from 'http';
import fs = require("fs");

const metodosPermitidos = ["get", "post", "put", "delete", "options"];

http
	.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		res.writeHead(403, { "content-type": "application/json" });
		res.end(JSON.stringify(req.headers));
	})
	.listen(5000, () => {
		console.log("Servidor ejecutándose en el puerto 5000");
	})