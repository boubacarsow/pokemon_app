const express = require('express');
const app = express();
const pokemon = require('./models/pokemon'); 

//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Index
app.get('/pokemon', (req, res) => {
res.render('Index', {
    pokemon
})
});

//Show
app.get('/:id', (req, res) =>{
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})

app.listen(3000, () => {
    console.log('Server running on 3000');
});