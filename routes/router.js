const express = require('express');
const router = express.Router();

const users = require('./users/users')
const transactions = require('./transactions/transactions')
// const api = require('./api/api')


// router.use(api);
router.use(users)
router.use(transactions)

module.exports = router;