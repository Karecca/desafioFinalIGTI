const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService.js');

const app = express();

transactionRouter.get('/', transactionService.findAll);
transactionRouter.delete('/:id', transactionService.remove);
transactionRouter.put('/:id', transactionService.update);
transactionRouter.post('/', transactionService.create);

module.exports = transactionRouter;
