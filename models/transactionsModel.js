const database = require('../config/connection')

class Transactions {
    const client =  await database.connect();
    const dateUTC = new Date (date.now()).toUTCString();
    const createTransaction = client.query('INSERTO INTO transaction ')
}



module.exports = Transactions