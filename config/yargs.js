const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'li',
        default: 10
    }
}
const argv = require('yargs')
.command('crear', 'imprime en concola la tabla de multiplicar', opciones)
.command('listar', 'imprime en concola la tabla de multiplicar', opciones)
.help()
.argv;

module.exports = {
    argv
}