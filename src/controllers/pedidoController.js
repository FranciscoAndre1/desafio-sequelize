const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');


exports.create = async (req, res) => {
  const { produto_id, quantidade } = req.body;

  const produto = await Produto.findByPk(produto_id);

  if (!produto) {
    return res.json({ erro: 'Produto não existe' });
  }

  if (quantidade > produto.estoque) {
    return res.json({ erro: 'Estoque insuficiente' });
  }

  
  produto.estoque -= quantidade;
  await produto.save();

  const pedido = await Pedido.create(req.body);
  res.json(pedido);
};


exports.getAll = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};
