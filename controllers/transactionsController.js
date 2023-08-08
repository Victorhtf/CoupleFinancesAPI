const database = require('../config/connection')

const express = require('express')
const app = express()

class Transactions {
    static async getAll (req, res) {
        try {
            const client = await database.connect();
            const transactions = await client.query('SELECT * FROM transactions')
            res.status(200).json(transactions.rows)
            console.log('Query successfully retrieved')

        } catch (error) {
            res.status(404).error(error);
        }
    }

    static async getById (req, res) {
        try {
            const client = await database.connect();
            const transactions = await client.query('SELECT * FROM transactions WHERE id = ' + req.params.id);
            res.status(200).json(transactions.rows);
            console.log('Query successfully retrieved')

        } catch (error) {
            res.status(404)
        }
    }

    
    static async createTransaction (req, res) {
        try {
            const { date, type, description, value, category, source, status, notes, username } = req.body;

            const query = 'INSERT INTO transactions (date, type, description, value, category, source, status, notes, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            const values = [date, type, description, value, category, source, status, notes, username];

            const client = await database.connect();
            const createdTransaction = await client.query(query, values)

            res.status(200).send('Transaction sucessfully created')
        } catch (error) {
            res.status(404).console.error();
        }
    }
    
    static async deleteById (req, res) {
        try {
            const client = await database.connect();
            console.log(req.params.id)
            const result = await client.query('DELETE FROM transactions WHERE ID=' + req.params.id)
            res.status(200).send('Transaction sucessfully deleted')
        } catch (error) {
            res.status(404)
            console.error();
        }
    }
}

module.exports = Transactions;