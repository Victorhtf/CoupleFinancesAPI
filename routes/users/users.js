const express = require('express');

const router = express.Router();

const users = require('../../controllers/usersController')


//Routes for the users
router.get('/users', users.getAll)
router.get('/user/:id', users.getById)

module.exports = router;