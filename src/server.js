const express = require('express');
const app = express();
const routes = require('./routes');
const db = require('./database');
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})