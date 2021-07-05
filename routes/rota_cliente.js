const express = require('express');
const router = express.Router();
const Cliente = require("../models/Cliente");
const Locacao = require("../models/Locacao");
const Produto = require("../models/Produto");
//Rota cliente
//Alteração da rota dos cliente
router.get('/cliente', (req, res) => {
 Cliente.sequelize.query("select * from cliente_view",
 { model: Cliente }).then(function(clientes){
 var nclientes = JSON.parse(JSON.stringify(clientes));
 res.render("admin/cliente/cliente", { clientes: nclientes });
 }); 
});
//Deletando o cliente
router.get('/deletar_cliente/:id', (req, res) => {
   Cliente.destroy({ where: { 'id_cliente': req.params.id } }).then(() => {
   res.redirect("/rota_cliente/cliente");
   }).catch((erro) => {
   res.render("Esse cliente não existe");
   });
  });
  
//abre e preenche o form de edição de cliente
router.get('/editar_cliente/:id', (req, res) => { Cliente.findAll({ where: { 'id_cliente': req.params.id } }).then((clientes) => {
   var nclientes = JSON.parse(JSON.stringify(clientes));
    res.render("admin/cliente/editcliente", { clientes: nclientes });
    });
   });

//Edita os dados de cliente

router.post('/cliente/editar_cliente', (req, res) => {
   Cliente.update({
   nome: req.body.nome,
   dt_nasc: req.body.dt_nasc,
   cpf: req.body.cpf,
   email: req.body.email,
   senha: req.body.senha
   },
   {
   where: { id_cliente: req.body.id_cliente }
   }).then(() => {
   res.redirect("/rota_cliente/cliente");
   }).catch((erro) => {
   res.send("Este cliente não existe " + erro);
   });
  });
  
//rota do form para add cliente
router.get('/cliente/add', (req, res) => {
   res.render("admin/cliente/addcliente");
  });
  
  


//rota do botão do form para add cliente
router.post('/cliente/nova', (req, res) => {
 Cliente.create({
   nome: req.body.nome,
   dt_nasc: req.body.dt_nasc,
   cpf: req.body.cpf,
   email: req.body.email,
   senha: req.body.senha
 }).then(() => {
 res.redirect("/rota_cliente/cliente");
 }).catch((erro) => {
 res.send('Houve um erro: ' + erro);
 });
});
//_______Fim das rotas de cliente______________
module.exports = router;