const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  bodyParser.urlencoded({ extended: true })(req, res, () => {
    console.log('Conteúdo da requisição:', req.body);
    res.end('Servidor Node.js funcionando!\n');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

process.on('SIGINT', () => {
  console.log('Encerrando o servidor...');
  server.close(() => {
    console.log('Servidor encerrado.');
    process.exit(0);
  });
});
