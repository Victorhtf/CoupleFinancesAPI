const express = require('express');
const router = express.Router();

const users = require('./users/users');
const transactions = require('./transactions/transactions');
const api = require('./api/api');


// Routes
router.use(users);
router.use(transactions);
router.use(api);


module.exports = router;