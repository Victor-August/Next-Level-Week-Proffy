//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

// Inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({extended: true}))

    // configurar arquivos estátivos (css, scripts, imagens)
    .use(express.static("public"))
    //rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //start do servidor
    .listen(5500)


//Para iniciar o servidor no console(ao desenvolvimento): "npm run dev"

//Para iniciar o servidor no console(apenas para rodar sem alterações): nodemon src/server.js

//No Git Bash: cd /c/nlw
//No Git Bash: nodemon src/server.js