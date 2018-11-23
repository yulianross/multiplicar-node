const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');


const comando = argv._[0];
const base = argv.base;
const limite = argv.limite;


switch(comando) {
    case 'listar':
    listarTabla(base, limite)
    break;
    case 'crear':
        crearArchivo(base, limite)
        .then(archivo => console.log(`el archivo ${archivo} ha sido creado`))
        .catch(err => console.log(err));
    break;
    default:
    console.log('comando no reconocido');
}







let argv2 = process.argv;
// let parametro = argv[2];
// let base = parseInt(parametro.split('=')[1]);

//console.log(comando);




