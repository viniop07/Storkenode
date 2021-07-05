const db = require('./db');
//reproduzindo a tabela Produto
const Produto = db.sequelize.define('tbl_produto', {
    id_produto: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    descricao: {
    type: db.Sequelize.TEXT
    },
    preco: {
    type: db.Sequelize.DECIMAL
    },
    quantidade: {
    type: db.Sequelize.INTEGER
    }
    }, { freezeTableName: true });
module.exports = Produto;