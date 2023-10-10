const express = require("express");
const bodyParser = require("body-parser");

const app = express();
bodyParser.urlencoded({ extended: false });
app.listen(300, () => {
    console.log("Servidor ativo na porta 3000");
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Front/index.html");
})

let nomes = [];
//CREATE
app.post("/cadastroNome", (req, res) => {
    const { nome } = req.body;
    nome.push(nome);
    console.log(nomes);
    res.sendFile(__dirname + "/Front/index.html");
    
})