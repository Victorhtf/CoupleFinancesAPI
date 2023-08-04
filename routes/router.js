const express = require('express');
const router = express.Router();

const transactions = require('./transactions/transactions')
const api = require('./api/api')


router.use(api);
router.use(transactions)

module.exports = router;