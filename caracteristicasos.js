const os = require('os');
const fs = require('fs');


// aqui hacemos la combercion a mb y gb con la funcion Math.pow y 
//se redondea el resultado a 2 decimales utilizando el método toFixed()

const totalMemBytes = os.totalmem();
const totalMemGB = (totalMemBytes / Math.pow(1024, 3)).toFixed(2); // Convertir bytes a GB y redondear
const totalMemMB = (totalMemBytes / Math.pow(1024, 2)).toFixed(2); // Convertir bytes a MB y redondear 

const especificacionesPC = `host: ${os.hostname()}
plataforma: ${os.platform()}
procesador: ${os.cpus()[0].model}
arquitectura: ${os.arch()}
memoria ram total: ${totalMemGB} GB (${totalMemMB} MB)`;

fs.writeFileSync('caracteristicas.txt', especificacionesPC);
console.log('Se ha generado el archivo con las características');
