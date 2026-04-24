const User = require('./User');
const Produto = require('./Produto');
const Pedido = require('./Pedido');

User.hasMany(Pedido, { foreignKey: 'usuario_id' });
Pedido.belongsTo(User, { foreignKey: 'usuario_id' });

Produto.hasMany(Pedido, { foreignKey: 'produto_id' });
Pedido.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = { User, Produto, Pedido };