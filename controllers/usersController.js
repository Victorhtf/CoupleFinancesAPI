const database = require('../config/connection');

class Users {
    static async getAll (req, res) {
        try {

            const client = await database.connect();
            const users = await client.query('SELECT * FROM USERS');

            res.status(200).json(users.rows);
        } catch (error) {
            res.status(404);
        }
    }

    
    static async getById (req, res) {
        try {

            const client = await database.connect();
            const user = await client.query('SELECT * FROM USERS WHERE ID = ' + req.params.id);

            res.status(200).json(user.rows);
        } catch (error) {
            res.status(404);
        }
    }

    static async createUser (req, res) {
        const { username, email, name, surname, birthdate, partner } = req.body;
        const query = 'INSERT INTO users (username, email, name, surname, birthdate, partner) VALUES ($1, $2, $3, $4, $5, $6)';
        const values = [username, email, name, surname, birthdate, partner];

        try {

            const client = await database.connect();
            await client.query(query, values);

            res.status(200).send('User sucessfully created');
        } catch (error) {
            res.status(404).error(error);
        }
    }

    static async deleteUser (req, res) {
        try {

            const client = await database.connect();
            await client.query('DELETE FROM users WHERE id =' + req.params.id);

            res.status(200).send('User deleted successfully');
        } catch (error) {
            res.status(404);
        }
    }
}


module.exports = Users;
