const express = require('express');
const router = express.Router();

const transactions = require('../../controllers/transactionsController');


// Routes
router.get('/transactions', transactions.getAll);
router.get('/transactions/:id', transactions.getById);
router.post('/transactions/create', transactions.createTransaction);
router.delete('/transactions/delete/:id', transactions.deleteById);


module.exports = router;
