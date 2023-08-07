const database = require('../config/connection')

class Transactions {
    static async getAll (req, res) {
        try {
            const client = await database.connect();
            const transactions = await client.query('SELECT * FROM transactions')
            res.status(200).json(transactions.rows)
            console.log('Query successfully retrieved')

        } catch (error) {
            res.status(404).json({ error: 'Erro' })
            console.error(error)
        }
    }

    static async getById (req, res) {
        try {
            const client = await database.connect();
            const transactions = await client.query('SELECT * FROM TRANSACTIONS WHERE id = ' + req.params.id)
            res.status(200).json(transactions.rows)
            console.log('Query successfully retrieved')

        } catch (error) {
            console.error(error)
            
        }
    }
    
    static async createTransaction (transaction) {

        const { data, type, description, value, category, source, status, notes, username } = transaction
        const client = await database.connect();
        const createdTransaction = await client.query('INSERTO INTO transactions (data, type, description, value, category, source, status, notes, username) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [data, type, description, value, category, source, status, notes, username]);
        return createdTransaction;
    }
}

module.exports = Transactions;