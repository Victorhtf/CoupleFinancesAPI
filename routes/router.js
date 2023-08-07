const express = require('express');
const router = express.Router();

const users = require('./users/users')
const transactions = require('./transactions/transactions')


// router.use(api);
router.use(users)
router.use(transactions)

module.exports = router;