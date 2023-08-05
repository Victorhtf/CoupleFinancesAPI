const { Client } = require('pg');
require('dotenv').config();

// Classe que implementa o padrão Singleton
class Database {
    constructor() {
        this.client = new Client({
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        });

        this.connected = false; // Variável para verificar se a conexão já foi estabelecida
    }

    // Método para conectar ao banco de dados
    async connect() {
        try {
            // Verifica se a conexão já foi estabelecida
            if (!this.connected) {
                console.log('Trying to establish connection');
                // Estabelece a conexão com o banco de dados
                await this.client.connect();
                this.connected = true; // Marca a conexão como estabelecida
                console.log('Connection successful');
            }
            return this.client; // Retorna o cliente de banco de dados
        } catch (error) {
            console.log('Connection error');
            throw error;
        }
    }
}

// Criando uma única instância da classe Database (Singleton)
const database = new Database();

// Exportando a instância única para ser reutilizada em outros módulos
module.exports = database;
