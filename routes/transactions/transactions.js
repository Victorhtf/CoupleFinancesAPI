const express = require('express')

const router = express.Router()

const transactions = require('../../controllers/transactionsController')


router.get('/transactions', transactions.getAll)
router.get('/transactions/:id', transactions.getById)
router.post('/transactions/create', transactions.createTransaction)
router.post('/transactions/delete', transactions.deleteById)



module.exports = router
