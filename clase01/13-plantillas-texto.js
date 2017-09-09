const nombre = "David",
	apellido = "Zuzunaga";

console.log(nombre + " " + apellido);

// back stick `
console.log(`${nombre} ${apellido}`);

let filasPersonas = "<table>"
const personas = ["David","Sergio","Mario","Ana"];

personas.forEach(item => {
	filasPersonas += `
		<tr>
			<td>${item.toUpperCase()} ${new Date()} </td>
		</tr>
	`
})
filasPersonas +="</table>"

console.log(filasPersonas)
