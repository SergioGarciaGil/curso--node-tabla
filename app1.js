

const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config-yargs/yargs');

console.clear();

//console.log(process.argv);


// const base = 2
 
 crearArchivo(argv.base,argv.listar,argv.hasta)
//  .then(crearArchivo => console.log(crearArchivo.random, 'creado'))
//     .catch(error => console.log(error));