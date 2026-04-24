const Pedido = require('../models/Pedido');
const Produto = require('../models/Produto');

// criar pedido com regra de estoque
exports.create = async (req, res) => {
  const { produto_id, quantidade } = req.body;

  const produto = await Produto.findByPk(produto_id);

  if (!produto) {
    return res.json({ erro: 'Produto não existe' });
  }

  if (quantidade > produto.estoque) {
    return res.json({ erro: 'Estoque insuficiente' });
  }

  // diminui estoque
  produto.estoque -= quantidade;
  await produto.save();

  const pedido = await Pedido.create(req.body);
  res.json(pedido);
};

// listar pedidos
exports.getAll = async (req, res) => {
  const pedidos = await Pedido.findAll();
  res.json(pedidos);
};