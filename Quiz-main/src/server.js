const express = require('express');
const server = express();

const swaggerFile = require('../swagger_output.json');
const swaggerUi = require('swagger-ui-express');

server.get('/', function(req, res){
  res.send("Seja bem-vindo ao meu Quiz!")
});
 
server.listen(8080, function(){console.log('O servidor está rodando! http://localhost:8080');});



