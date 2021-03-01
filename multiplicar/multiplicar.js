// requires
const colors = require('colors'); 
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
		if( !Number(base) ) {
			console.log("El valor introducido '"+ base +
				"' no es un numero...");
			return;
		}

		console.log(`\n===============\nTabla del ${base}\n===============\n`.green);

		for (i = 0 ;i <= limite; i++) {
			console.log(`${base} * ${i} = ${base * i} \n`);
		}
}

let crearArchivo = (base, limite = 10) => {
	return new Promise( (resolve, reject) => {

		if( !Number(base) ) {
			reject("El valor introducido '"+ base +
				"' no es un numero...");
			return;
		}

		let data = "";

		for (i = 0 ;i <= limite; i++) {
			data += (`${base} * ${i} = ${base * i} \n`);
		}


		fs.writeFile(`./tablas/tabla-${base}_hasta-${limite}.txt`, data, (err) => {
			if(err) 
			    reject(err);
			
			else 
			    resolve(`tabla-${base}_hasta-${limite}.txt`)
		});
	})
}
module.exports = {
    listarTabla, 
	crearArchivo
}

