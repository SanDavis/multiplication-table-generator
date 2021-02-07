const fs = require('fs');
const argv = require('./config/yargs');
const colors = require('colors');

let base = argv.base;
let hasta = argv.hasta;
let data = '';

for (let i = 1; i <= hasta; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}


fs.writeFile(`./out/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(colors.blue(data));
    console.log(`The file has been saved at out folder`.green);
});