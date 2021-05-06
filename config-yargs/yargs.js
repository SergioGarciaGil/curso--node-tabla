

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description:'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description:'Este es el número hasta donde quieres la tabla'
    })
            .option('l', {
        alias: 'listar',
                type: 'boolean',
                default: false,
                description:'Muestra la tabla en consola'
             
            })
        .check((argv, options) => {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un numero'
            }
            return true;
        
    })
    .argv

module.exports = argv;