//Importing dependencies
const express = require('express');
const app = express();
const router = require('./routes/router');
const PORT = process.env.SERVER_PORT;
require('dotenv').config();


// Parser JSON
app.use(express.json());


// Default routes
app.use(router);


// Run server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


