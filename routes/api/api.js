const express = require('express');
const router = express.Router();

const API = require('../../controllers/apiController');


// Routes
router.get('/api', API.getDetails);
router.get('/', API.root);


module.exports = router;