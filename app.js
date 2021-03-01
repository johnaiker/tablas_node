//Requires
const colors = require('colors'); 
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
	case 'listar': 
		listarTabla(argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then( archivo => console.log(`El archivo ${archivo.green} fue creado correctamente.`))
			.catch( (err) => console.log("No se pudo crear el archivo:".bgGray, err.bgRed));
		break;
	default:
		console.log('\ncomando no reconocido\n'.bgRed)
}
