const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite = 5) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('la base no es un numero');
        } else {
            let data = '';
            
            for(let i = 1; i <= limite; i ++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
            
            fs.writeFile(`tablas/tabla-${base}.txt`, data, function(err) {
                if (err) reject(err);
                else {
                    resolve(colors.blue(`tabla-${base}.txt`));
                    console.log('el archivo ha sido creado');
                }
            
               
            });
        }
       
    });
}

const listarTabla = (base, limite = 10) => {
    console.log(colors.green('================================'));
    console.log(`tabla de ${base}`.green);
    console.log(colors.green('================================'));
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
