const express = require('express');
const app = express();
const pokemon = require('./models/pokemon'); 

//Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

//Index
app.get('/pokemon', (req, res) => {
res.render('Index', {
    pokemon
})
});

//NEW
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//Post route
app.post('/pokemon', (req, res)=>{
    console.log(req.body);
    res.send('data received');
});

app.post('/pokemon', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    pokemon.push(req.body);
    res.redirect('/pokemon');
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
