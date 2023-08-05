const database = require('../config/connection');

class Users {
    static async getAll (req, res) {
        try {
            const client = await database.connect();
            const users = await client.query('SELECT * FROM USERS');
            res.status(200).json(users.rows);
            console.log('Query successfully retrieved')
            
        } catch (error) {
            console.error(error);
        }
    }

    
    static async getById (req, res) {
        try {
            const client = await database.connect();
            const user = await client.query('SELECT * FROM USERS WHERE ID = ' + req.params.id)
            res.status(200).json(user.rows);
            console.log('Query successfully retrieved')

        } catch (error) {
            res.status(404)
            console.error(error)
            
        }
}
}

module.exports = Users;
