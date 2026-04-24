const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  nome: DataTypes.STRING,
  preco: DataTypes.FLOAT,
  estoque: DataTypes.INTEGER
});

module.exports = Produto;