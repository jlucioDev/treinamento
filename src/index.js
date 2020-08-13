const express = require('express');

const app = express();

app.get('/project', (req, res) => {
    return res.send('Hello World');
})

app.listen(3333);
