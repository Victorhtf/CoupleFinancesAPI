const database = require('../config/connection')

class Transactions {
    static async getAll (req, res) {
        try {
            const client = await database();
            const transactions = await client.query('SELECT * FROM transactions')
            res.status(200).json(transactions)
        } catch (error) {
            res.status(404).json({ error: 'Erro' })
        }
    }

}


module.exports = Transactions;