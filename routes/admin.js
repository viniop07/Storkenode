const express = require('express');
const router = express.Router();
//vamos carregar todos os modelos
const Cliente = require("../models/Cliente");
const Locacao = require("../models/Locacao");
const Produto = require("../models/Produto");
router.get('/', (req, res) => {
 res.render("index");
});

router.get('/login',(req, res)=>{
    //Retira a dependência do main.handlebars junto com os partials
    res.render("login", { title: 'Minha tela', layout: false });
   });
   router.post('/admin/autenticar',(req, res)=>{
    var nome=req.body.nome;
    var senha=req.body.senha;
    Cliente.findOne({
        where: {
        senha: senha, nome: nome
        }
        }).then(cliente =>{
        if(cliente){
        
        res.redirect("/");
        }else{
        res.redirect("/login");
        }
        });
        
       });
module.exports = router;