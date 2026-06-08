const express = require("express");
const app = express();

//configurações
app.set("port", process.env.port || process.env.PORT || 5000);
app.use(express.urlencoded({ extended: true }));

/* Exercicio 6 middleware */
app.use("/", (req, res, next) => {
    console.log("URL: " + req.url + " || " + req.ip);
    console.log("Data: " + new Date());
    next();
});

app.use("/", require("./routes/main.route"));

/* Exercicio 2 */
app.get("/info", function (request, response) {
    console.log("Início da execução da rota info..."); //mostra a mensagem na consola
    response.send("Rota info executada com sucesso..."); //mostra a mensagem na página
});

/* Exercicio 3 */
app.get("/bemvindo", function (request, response) {
    let nome = request.query.nome;
    if (nome) {
        response.send("Bem vindo, " + nome + "!");
    } else {
        response.send("Por favor, indique o seu nome no parâmetro da URL!");
    }
});

/* Exercicio 4 */
app.get("/soma", (req, res) => {
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

app.listen(app.get("port"), () => {
    console.log("Servidor iniciado na porta: " + app.get("port"));
});

