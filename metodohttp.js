const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

http.createServer((request, response) => {
  if (request.url === '/') {
    try {
      const data = fs.readFileSync('pagina.html', 'utf8');
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    } catch (err) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write('Error interno del servidor');
      response.end();
    }
  } else if (request.url === '/home') {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Llamando al index');
    response.end();
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Página no encontrada');
    response.end();
  }
}).listen(port, host, () => {
  console.log(`Servidor corriendo en http://${host}:${port}`);
});