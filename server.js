require('dotenv').config();
const  express  = require('express');
const app =express();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.js');

//middleware
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));

//connect to Mongoose /Remove Deprication warnings
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
mongoose.connection.once('open',()=>{
    console.log('Connected to Mongo');
});
//Routes
app.get('/',(req,res)=>{
    res.send('Welcome to the Pokemon App!');
})
//Index Route with manual predeclared input
// app.get('/pokemon',(req,res)=>{
//     res.render('Index',{
//         pokemon:pokemon
//     });
// })
//Index Route with DB connection
app.get("/pokemon",(req,res) => {
    //find all pokemon
   Pokemon.find({},(error,allPokemon)=>{
    res.render('Index',{
        pokemon:allPokemon
    })
   })
});
//New route
app.get('/pokemon/new',(req,res)=>{
     res.render('New');
});
//Post request Create Route
app.post('/pokemon',(req,res)=>{
    Pokemon.create(req.body,(error,createdPokemon)=>{
    res.redirect('/pokemon');
    })
});
//Show route for manual predeclared inputs
// app.get('/pokemon/:id',(req,res) => {
//     //res.send(pokemon[req.params.id]);
//     res.render('Show',{pokemon:pokemon[req.params.id]})
// })
//Show route with DB connection
app.get('/pokemon/:id',(req,res)=>{
     Pokemon.findById(req.params.id,(error,foundPokemon)=>{
       res.render('Show',{
        pokemon:foundPokemon
       })
     })
});
app.listen(3000,()=>{
    console.log("listening");
})