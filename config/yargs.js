const { number } = require('yargs');

const argv = require('yargs').options('b', {
    alias: 'base',
    type: number,
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
}).options('h', {
    alias: 'hasta',
    type: number,
    demandOption: true,
    describe: 'Indica el hasta qué numero se ha de generar la tabla'
}).check((argv, options) => {

    if (isNaN(argv.base) || isNaN(argv.hasta)) {
        throw 'La base y/o hasta tienen que ser numéricos';
    }
    return true;
}).argv;

module.exports = argv;