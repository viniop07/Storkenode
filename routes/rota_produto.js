const express = require('express');
const router = express.Router();
//vamos carregar todos os modelos
const Cliente = require("../models/Cliente");
const Locacao = require("../models/Locacao");
const Produto = require("../models/Produto");
//______________Rotas de produto_______________
//Alteração da rota dos produtos
//Carregando todos os produtos na Rota produto
router.get('/produto', (req, res) => {
 Produto.findAll().then((produtos) => {
 produtos = produtos.map((produto) => {
 return produto.toJSON();
 });
 res.render("admin/produto/produto", { produtos: produtos });
 });
});
//Deletando o produto
router.get('/deletar_produto/:id', (req, res) => {
 Produto.destroy({ where: { 'id_produto': req.params.id } }).then(() => {
 res.redirect("/rota_produto/produto");
 }).catch((err) => {
 res.render("Esse produto não existe");
 });
});
//abre e preenche o form de edição de produto
router.get('/editar_produto/:id', (req, res) => {
    Produto.findAll({ where: { 'id_produto': req.params.id } }).then((produtos) => {
    produtos = produtos.map((produto) => { return produto.toJSON() })
   ;
    res.render("admin/produto/editproduto", { produtos: produtos });
    });
   });
   //Edita os dados de produto
   router.post('/produto/editar_produto', (req, res) => {
    Produto.update({
    descricao: req.body.descricao,
    preco: req.body.preco,
    quantidade: req.body.quantidade
    },
    {
    where: { id_produto: req.body.id_produto }
    }).then(() => {
    res.redirect("/rota_produto/produto");
    }).catch((erro) => {
    res.send("Este produto não existe " + erro);
    });
   });
   //rota do form para add produto
   router.get('/produto/add', (req, res) => {
    res.render("admin/produto/addproduto");
   });
   //rota do botão do form para add produto
   router.post('/produto/nova', (req, res) => {
    Produto.create({
    descricao: req.body.descricao,
    preco: req.body.preco,
    quantidade: req.body.quantidade
    }).then(() => {
    res.redirect("/rota_produto/produto");
    }).catch((erro) => {
    res.send('Houve um erro: ' + erro);
    });
   });
   //_______Fim das rotas de produtos______________
   module.exports = router;