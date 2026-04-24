const Produto = require('../models/Produto');

exports.create = async (req, res) => {
  const produto = await Produto.create(req.body);
  res.json(produto);
};

exports.getAll = async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
};

exports.getById = async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  res.json(produto);
};

exports.update = async (req, res) => {
  await Produto.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ mensagem: 'Atualizado' });
};

exports.delete = async (req, res) => {
  await Produto.destroy({
    where: { id: req.params.id }
  });
  res.json({ mensagem: 'Deletado' });
};