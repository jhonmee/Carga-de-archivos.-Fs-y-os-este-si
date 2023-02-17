const fs = require('fs');

for(let i = 1; i <= 10; i++) { // se puede editar el numero para que vaya hasta donde uno quiera
  fs.writeFileSync('numeros1al10.txt', `${i}\n`, { flag: 'a' }); // el nombre del archivo se puede cambiar a gusto
}

console.log('Se ha generado el archivo correspondiente con los números del 1 al 10.');




