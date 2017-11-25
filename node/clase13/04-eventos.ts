import { EventEmitter } from 'events';

const evento = new EventEmitter();

evento.on("nuevo participante", (nombre: string) => {
	console.log(nombre.toUpperCase());
});

evento.on("nuevo participante", (nombre: string) => {
	console.log(`Bienvenido ${nombre}`);
});

evento.on("nuevo participante", (nombre: string) => {
	console.log(`${nombre} se registró el ${new Date()}`);
});

evento.emit("nuevo participante", "David");
evento.emit("aaa", "Carlos");
evento.emit("nuevo participante", "Cecilia");

import { Reloj } from './reloj';

const reloj = new Reloj();
reloj.iniciar();
reloj.on("mostrar hora", (hora: string) => {
	console.log(hora);
});

