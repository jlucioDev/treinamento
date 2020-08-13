const express = require('express');

const app = express();

app.get('/project', (req, res) => {
    return res.send('Hello World');
})

app.post('/project', (req, res) => {
    return res.send('Método Post');
})

app.listen(3333);
