var http = require("http");
const util = require("lodash");

let server = http.createServer((req, res) => {
    console.log("ATENÇÃO: recebi um pedido HTTP");
   // res.end("O seu pedido foi recebido e executado com sucesso!");

    const numeros = [100, 50, 800, 30, 60];
    const maior = util.max(numeros);
    res.write(`O maior numéro é: ${maior}`);
    res.end();
});
server.listen("5100");
