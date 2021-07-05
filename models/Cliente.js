const db = require('./db');
//reproduzindo a tabela Cliente
const Cliente = db.sequelize.define('tbl_cliente', {
    id_cliente:{        
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
    nome:{
    type: db.Sequelize.STRING
    },
    dt_nasc:{
    type: db.Sequelize.DATE
    },
    cpf:{
    type: db.Sequelize.TEXT
    },
    senha:{
        type: db.Sequelize.TEXT
        },
    email:{
    type: db.Sequelize.TEXT,
    isEmail: true
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });
module.exports = Cliente;