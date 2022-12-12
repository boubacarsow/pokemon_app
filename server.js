const express = require('express');
const app = express();

//const fruits = ['apple', 'banana', 'pear'];

app.get('/', (req, res) => {
    console.log('Welcome to the Pokemon App!')
    res.send('Welcome to the Pokemon App!');
});

app.listen(3000)