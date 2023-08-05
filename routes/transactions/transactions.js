const express = require('express')

const router = express.Router()

const transactions = require('../../controllers/transactionsController')


router.get('/transactions', transactions.getAll)
router.get('/transactions/:id', transactions.getById)



module.exports = router
