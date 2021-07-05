const db = require('./db');
//reproduzindo a tabela Locação
const Locacao = db.sequelize.define('tbl_locacao', {
    id_locacao:{
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
    },
   
    fk_produto:{
    type: db.Sequelize.INTEGER,
    references: { model: 'tbl_produto', key: 'id_produto'},
    onDelete: 'CASCADE',
    allowNull: false,
    },
    fk_cliente:{
    type: db.Sequelize.INTEGER,
    references: { model: 'tbl_cliente', key: 'id_cliente'},
    onDelete: 'CASCADE',
    allowNull: false,
    },
    valor_total:{
    type: db.Sequelize.STRING
    },
    data_compra:{
    type: db.Sequelize.DATE
    },
    quantidade:{
    type: db.Sequelize.INTEGER
    }
   }, { freezeTableName: true });
   module.exports = Locacao;