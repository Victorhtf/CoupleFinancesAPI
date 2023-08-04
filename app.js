//Importing dependencies
const express = require('express');
const app = express();
const router = require('./routes/router');

require('dotenv').config();
const PORT = process.env.SERVER_PORT;


// Default routes
app.use(router);


// Run server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


