const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();


// arquivos estáticos
app.use(express.static(__dirname + '/public'));// dirname é o caminho da pasta do projeto

//rotaa
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/produtoA', (req, res) => {
    res.sendFile(__dirname + '/src/produtoa.html');
});

app.get('/produtoB', (req, res) => {
    res.sendFile(__dirname + '/src/produtob.html');
});

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});       
 


