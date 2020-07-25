const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const findAll = async (req, res) => {
  const period = req.query.period;

  try {
    const dados = await TransactionModel.find({ yearMonth: period });
    res.status(200).send(dados);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    await TransactionModel.findByIdAndRemove({ _id: id });
    res.send('Lançamento excluído com sucesso!');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao excluir documentos' });
  }
};

const update = async (req, res) => {
  const id = req.params.id;

  try {
    await TransactionModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send('Lançamento atualizado com sucesso!');
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao atualizar documento' });
  }
};

const create = async (req, res) => {
  try {
    const dados = new TransactionModel(req.body);
    await dados.save();
    res.send(dados);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao salvar documento' });
  }
};

module.exports = { findAll, remove, update, create };
