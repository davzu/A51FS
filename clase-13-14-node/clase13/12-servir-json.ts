import * as http from 'http';
import * as fs from 'fs';

const servidor = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
	const usuarios = [
		{nombre:"David", rol:"admin"},
		{nombre:"Pedor", rol:"operador"}
	]

	res.writeHead(200, { "content-type": "application/json" });
	res.end(JSON.stringify(usuarios));
});

servidor.listen(5000, () => {
	console.log("Servidor ejecutándose en el puerto 5000");
});