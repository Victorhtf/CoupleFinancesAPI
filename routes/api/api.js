const express = require('express');
const router = express.Router();

const root = require('../../controllers/rootController');
const apiDetails = require('../../controllers/apidetailsController')

router.get('/', root.get);
router.get('/api', apiDetails.get);

module.exports = router;