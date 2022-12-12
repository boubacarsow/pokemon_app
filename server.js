const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits', (req, res) => {
    res.send(fruits);
});

app.listen(3000, () => {
    console.log('listening');
});