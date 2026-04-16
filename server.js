const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {
    const url = decodeURI(req.url)
    let aquivohtml ;
    if (url === "/produtoa") {
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html; charset=utf-8');
        aquivohtml = fs.readFileSync("./src/produtoa.html")
     
        res.end(aquivohtml)
    }
    else if (url === "/"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html; charset=utf-8');
        aquivohtml = fs.readFileSync("./src/index.html")
        res.end(aquivohtml)
    }
    else if (url === "/produtob"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html; charset=utf-8');
        aquivohtml = fs.readFileSync("./src/produtob.html")
        res.end(aquivohtml)
    }
    else if (url === "/css/index.css"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/css; charset=utf-8');
        aquivohtml = fs.readFileSync("./css/index.css")
        res.end(aquivohtml)
    }
    else if (url === "/css/produtoa.css"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/css; charset=utf-8');
        aquivohtml = fs.readFileSync("./css/produtoa.css")
        res.end(aquivohtml)
    }
    else if (url === "/css/produtob.css"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/css; charset=utf-8');
        aquivohtml = fs.readFileSync("./css/produtob.css")
        res.end(aquivohtml)
    }
    else if (url === "/imagens/download (20).jpg"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'image/jpeg');
        aquivohtml = fs.readFileSync("./css/imagens/download (20).jpg")
        res.end(aquivohtml)
    }
   
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type' , 'text/html; charset=utf-8');
        res.end("Pagina nao encontrada");
    }
})
           
 
            

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
