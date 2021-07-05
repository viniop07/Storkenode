const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const rota_cliente = require('./routes/rota_cliente.js');
const rota_produto = require('./routes/rota_produto.js');
const rota_locacao = require('./routes/rota_locacao.js');
//const Post = require('./models/Post');
//carregando o cabeçalho do html em outras páginas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//arquivos estáticos
app.use('/public/css', express.static('public/css'));
app.use('/public/js', express.static('public/js'));
app.use('/public/img', express.static('public/img'));
//Remanejando Rotas admin
app.use('/', admin);
//Remanejando Rotas de cliente
app.use('/rota_cliente', rota_cliente);
//Remanejando Rotas de funcionarios
app.use('/rota_produto', rota_produto);
//Remanejando Rotas locação
app.use('/rota_locacao', rota_locacao);
//rota alternativa
app.get('/admin',(req, res)=>{ res.send("Estou na rota principal");
});
const PORT = 8081;
app.listen(PORT,()=>{console.log("Servidor Rodando");
});