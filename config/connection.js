const { Client } = require('pg');
require('dotenv').config();

const client = new Client ({
        database: process.env.DB_NAME ,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    });

async function establishConnection () {
    console.log('Trying to establish connection');
    try {
        await client.connect();
        console.log('Connection successful');
        return client;
    } catch (error) {
        console.log('Connection error');
        
    }
}


module.exports = establishConnection