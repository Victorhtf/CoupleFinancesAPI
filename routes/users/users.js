const express = require('express');

const router = express.Router();

const users = require('../../controllers/usersController')


router.get('/users', users.getAll)
router.get('/users/:id', users.getById)
router.post('/users/create', users.createUser)
router.delete('/users/delete/:id', users.deleteUser)

module.exports = router;