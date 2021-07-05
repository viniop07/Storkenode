const Sequelize = require('sequelize');
//Conexão com o banco de dados
const sequelize = new Sequelize('storke', 'root', '', {
 host: "localhost",
 port: "3307",
 dialect: 'mariadb'
});
//Vamos exportar as variáveis
module.exports = {
 Sequelize: Sequelize,
 sequelize: sequelize
}