
const establishConnection = require('../config/connection')

class Transactions {
    static async getAll (req, res) {
        try {
            const client = await establishConnection();
            const result = await client.query('SELECT * FROM transactions')
            res.status(200).json(result)
        } catch (error) {
            res.status(404).json({ error: error })
        }
    }
}

module.exports = Transactions;