const express = require("express");
const router = express.Router();

/* Exercicio 2 */
router.get("/info", function(request, response) {
    console.log("Início da execução da rota info..."); //mostra a mensagem na consola
    response.send("Rota info executada com sucesso..."); //mostra a mensagem na página
});

/* Exercicio 3 */
router.get("/bemvindo", function(request, response) {
    let nome = request.query.nome;
    if (nome) {
        response.send("Bem vindo," + nome +"!");
    } else {
        response.send("Por favor, indique o seu nome no parâmetro da URL!");
    }
});

/* Exercicio 4 */
router.get("/soma", (req, res) => {
    if (isNaN(req.query.num1) || isNaN(req.query.num2)) {
        res.send("Por favor, indique os dois núemros a somar");
    } else {
        let num1 = Number(req.query.num1);
        let num2 = Number(req.query.num2);
        let soma = num1 + num2;
        res.json({
            "valor1": num1,
            "valor2": num2,
            "resultado": soma,
        });
    }
});


module.exports = router;
