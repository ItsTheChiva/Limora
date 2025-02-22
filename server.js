// Importando as dependências
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

// Inicializando o Express
const app = express();
const port = process.env.PORT || 3000;

// Criando a conexão com o banco de dados MySQL usando variáveis de ambiente
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectando ao banco de dados MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err.stack);
    return;
  }
  console.log('Conectado ao MySQL no Railway!');
});

// Definindo uma rota simples para testar
app.get('/', (req, res) => {
  res.send('Servidor rodando e conectado ao MySQL!');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
