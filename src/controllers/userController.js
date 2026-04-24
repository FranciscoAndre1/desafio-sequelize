const User = require('../models/User');

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.getAll = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

exports.update = async (req, res) => {
  await User.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ mensagem: 'Atualizado' });
};

exports.delete = async (req, res) => {
  await User.destroy({
    where: { id: req.params.id }
  });
  res.json({ mensagem: 'Deletado' });
};