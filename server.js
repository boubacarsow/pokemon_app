const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js'); 

//const fruits = ['apple', 'banana', 'pear'];

app.get('/pokemon', (req, res) => {
    console.log('Welcome to the Pokemon App!')
    res.send(pokemon);
});

app.listen(3000, () => {
    console.log('listening');
});