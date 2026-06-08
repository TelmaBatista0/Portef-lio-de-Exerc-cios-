const express = require("express");
const app = express();
const path = require("path");
var expressLayouts = require('express-ejs-layouts');


//configurações
app.set("port", process.env.port || process.env.PORT || 5000);
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/main.route"));

app.use(express.static('public'));

// definir o motor de templating
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    res.locals.activePage = '';
    next();
});

// rota virtual (estática) para a pasta dos assets e bootstrap)
app.use(express.static(path.join(__dirname, "assets")));
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist")));


//exercicio 2
app.get("/", (req, res) => {
    res.render("pages/ex2", { title: "Exercicio 2" });
});

//exercicio 3
app.get("/", (req, res) => {
    res.render("pages/ex2", { title: "Página inicial", activePage: "home" });
});

//exercicio 4
app.get("/estudantes", (req, res) => {
    res.render("/views/student/index.ejs", { activePage: "students-list" });
});

app.get("/estudantes/novo", (req, res) => {
    res.render("student/new.ejs", { activePage: "students-create" });
});

//exercicio 6
app.get("/ex6", (req, res) => {
    res.render("pages/ex6", { activePage: "ex6" });
});

//exercicio 7
app.get("/ex7", (req, res) => {
    res.render("pages/ex7", { activePage: "ex7" });
});

//exercicio 8
app.get("/ex8", (req, res) => {
    res.render("pages/ex8", { activePage: "ex8" });
});

//exercicio 9
app.get("/ex9", (req, res) => {
    res.render("pages/ex9", { activePage: "ex9" });
});

//exercicio 10
app.get("/ex10", (req, res) => {
    res.render("pages/ex10", { activePage: "ex10" });
});


//adicionado ao exercicio 3
app.use(expressLayouts);
app.set("layout", "layout/template");


app.listen(app.get("port"), () => {
    console.log("Servidor iniciado na porta: " + app.get("port"));
});
