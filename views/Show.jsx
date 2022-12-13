import React, { Component } from 'react'

    class Show extends React.Component {
       render () {
        const pokemon = this.props.pokemon
        //console.log(this.props.pokemon)
        return (
        <div>
          <h3> {pokemon.name} </h3>
          <img src={pokemon.img} alt={`${pokemon.name}'s Picture`}/>
          <a href="/">Home Page</a>
          </div>
        );
       }
    }

     export default Show;