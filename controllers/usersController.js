const database = require('../config/connection');

class Users {
    static async getAll(req, res) {
        try {
            const client = await database.connect();
            const users = await client.query('SELECT * FROM users');
            res.status(200).json(users.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao obter os usuários' });
        }
    }

    
    static async getById (req, res) {
        try {
            const client = await database.connect();
            const user = await client.query('SELECT * FROM USERS WHERE ID = ' + req.params.id)
            res.status(200).json(client)
            console.log(user)
        } catch (error) {
            res.status(404)
            console.error(error)
            
        }
}
}

module.exports = Users;
