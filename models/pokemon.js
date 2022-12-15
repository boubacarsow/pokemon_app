const mongoose = require('mongoose');

// The pokemon document is shaped from this schema
const pokemonSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    img:  {
        type: String,
        required: true
    }
});

// Essentially creating a pokemon document
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;


// const pokemon = [
//     {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg"},
//     {name: "ivysaur", img: "https://img.pokemondb.net/artwork/large/ivysaur.jpg"},
//     {name: "venusaur", img: "https://img.pokemondb.net/artwork/large/venusaur.jpg"},
//     {name: "charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg"},
//     {name: "charizard", img: "https://img.pokemondb.net/artwork/large/charizard.jpg"},
//     {name: "squirtle", img: "https://img.pokemondb.net/artwork/large/squirtle.jpg"},
//     {name: "wartortle", img: "https://img.pokemondb.net/artwork/large/wartortle.jpg"}
//  ];

