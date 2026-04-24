const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  usuario_id: DataTypes.INTEGER,
  produto_id: DataTypes.INTEGER,
  quantidade: DataTypes.INTEGER
});

module.exports = Pedido;