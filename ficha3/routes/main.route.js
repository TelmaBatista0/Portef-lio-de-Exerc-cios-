const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.use((req, res, next) => {
    res.locals.activePage = '';
    next();
});

//exercicio 2
router.get("/", (req, res) => {
    res.render("pages/ex2", { title: "" });
});

//exercicio 3
router.get("/", (req, res) => {
    res.render("pages/ex2", { title: "Exercicio 2", activePage: "home" });
});

//exercicio 4
router.get("/estudantes", (req, res) => {
    res.render("student/index.ejs", { activePage: "students-list" });
});

router.get("/estudantes/novo", (req, res) => {
    res.render("student/new.ejs", { activePage: "students-create" });
});

//exercicio 6
router.get("/ex6", (req, res) => {
    res.render("pages/ex6", { activePage: "ex6" });
});

//exercicio 7
router.get("/ex7", (req, res) => {
    res.render("pages/ex7", { activePage: "ex7" });
});

//exercicio 8
router.get("/ex8", (req, res) => {
    res.render("pages/ex8", { activePage: "ex8" });
});

//exercicio 9
router.get("/ex9", (req, res) => {
    res.render("pages/ex9", { activePage: "ex9" });
});

//exercicio 10
router.get("/ex10", (req, res) => {
    res.render("pages/ex10", { activePage: "ex10" });
});

module.exports = router;