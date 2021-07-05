
const express = require('express');
const router = express.Router();
//vamos carregar todos os modelos
const Cliente = require("../models/Cliente");
const Locacao = require("../models/Locacao");
const Produto = require("../models/Produto");
//Rotas de Locação
//Alteração da rota das locações
router.get('/locacao', (req, res) => {
 Locacao.sequelize.query("select * from locacao_view",
 { model: Locacao }).then(function(locacoes){
 var nlocacoes = JSON.parse(JSON.stringify(locacoes));
 res.render("admin/locacao/locacao", { locacoes: nlocacoes });
 });
});
//Deletando o locação
router.get('/deletar_locacao/:id', (req, res) => {
 Locacao.destroy({ where: { 'id_locacao': req.params.id } }).then(() => {
 res.redirect("/rota_locacao/locacao");
}).catch((err) => {
    res.render("Essa locação não existe");
    });
   });
   //abre e preenche o form de edição de locação
   router.get('/editar_locacao/:id', (req, res) => {
    Locacao.findAll({ where: { 'id_locacao': req.params.id } }).then((locacoes) => {
    Produto.findAll().then((produtos) => {
    Cliente.findAll().then((clientes) => {
    var nlocacoes = JSON.parse(JSON.stringify(locacoes));
    var nprodutos = JSON.parse(JSON.stringify(produtos));
    var nclientes = JSON.parse(JSON.stringify(clientes));
    res.render("admin/locacao/editlocacao", {
    locacoes: nlocacoes,
    produtos: nprodutos,
    clientes: nclientes
    });
    });
    });
    });
    });
   //Edita os dados de locação
   router.post('/locacao/editar_locacao', (req, res) => {
    Locacao.update({
    fk_produto: req.body.produto,
    fk_cliente: req.body.cliente,
    valor_total: req.body.valor_total,
    data_compra: req.body.data_compra,
    quantidade: req.body.quantidade
    },
    {
    where: { id_locacao: req.body.id_locacao }
    }).then(() => {
    res.redirect("/rota_locacao/locacao");
    }).catch((erro) => {
    res.send("Esta locação não existe " + erro);
    });
   });
   //rota do form para add locação
router.get('/locacao/add', (req, res) => {
    Produto.findAll().then((produtos) => {
    Cliente.findAll().then((clientes) => {
    var nprodutos = JSON.parse(JSON.stringify(produtos));
    var nclientes = JSON.parse(JSON.stringify(clientes));
    res.render("admin/locacao/addlocacao", {
   
    funcionarios: nfuncionarios,
    produtos: nprodutos,
    clientes: nclientes
    });
    });
    });
    });
   //rota do botão do form para add locação
   router.post('/locacao/nova', (req, res) => {
    Locacao.create({
    fk_produto: req.body.produto,
    fk_cliente: req.body.cliente,
    valor_total: req.body.valor_total,
    data_compra: req.body.data_compra,
    quantidade: req.body.quantidade
    }).then(() => {
    res.redirect("/rota_locacao/locacao");
    }).catch((erro) => {
    res.send('Houve um erro: ' + erro);
    });
   });
   //_______ Fim das rotas de locação __________
   module.exports = router;