import React, { Component } from "react";
//import pokemon from "../models/pokemon";

const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
    textAlign: 'center',
};


export default class Index extends Component {
    render() {
        console.log(this.props.pokemon)
        const pokemon = this.props.pokemon
    return (
        
        <div>
            <h1 style={myStyle}>All Pokemon</h1>
            {pokemon.map((p) => {
                return (
                    <a href={`/pokemon/${p._id}`}>
                    <li>{p.name}</li>
                    </a>
                );
            })}
            <a href='/:id'></a>
        </div>
    );
}
}

<nav>
    <a href="/pokemon/new">Create a New Fruit</a>
</nav>