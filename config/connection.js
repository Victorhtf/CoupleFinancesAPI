const { Client } = require('pg');
require('dotenv').config();

class Database {
    constructor() {
        this.client = new Client({
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        });

        this.connected = false;
    }

    async connect() {
        try {
            if (!this.connected) {
                console.log('Trying to establish connection');
                await this.client.connect();
                this.connected = true;
                console.log('Connection successful');
            }
            return this.client;
        } catch (error) {
            console.log('Connection error');
            throw error;
        }
    }
}

const database = new Database();

module.exports = database;
