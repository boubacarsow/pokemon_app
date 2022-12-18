// import React from 'react';

// class Show extends React.Component{
//     render(){
//         const pokemon= this.props.pokemon;
//         return(
//            <div>
//     <h1>Gotta Catch 'Em All</h1>
//     <h2>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h2>
//     <img src = {pokemon.img}/>
//     <nav>
//     <a href = '/pokemon'>HomePage</a>
//     </nav>
  
//         </div>

//         )
//     }
// }

// module.exports = Show;

import React from "react";
import pokemon from "../models/pokemon";

// HTML Styling
const bodyStyling = {
    margin: 'o auto',
    textAlign: 'center',
    backgroundImage: 'url(https://images.wallpapersden.com/image/download/pokemon-pikachu-art_a25tbW6UmZqaraWkpJRmbmdlrWZlbWU.jpg)',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
};
// NAV Styling
const navStyling = {
    textAlign: 'center',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    padding: '10px',
    backgroundColor: 'orange',
    width: '1400px',
    margin: '0 auto',
    marginBottom: '1%',
    borderRadius: '7px',
    padding: '0px',
    paddingTop: '8px',
    paddingBottom: '8px',
  }
// CSS STYLING
const imageStyling = {
    padding: '8px',
    borderRadius: '10px',
    // backgroundColor: '#2a2a2a',
    width: '250px',
    height: 'auto',
    marginTop: '-1%',
    mixBlendMode: 'multiply'
  };
// CENTERED STYLING
const centeredStyling = {
    background: 'orange',
    padding: '8px',
    fontSize: '20px',
    borderRadius: '7px',
    fontFamily: 'monospace',
    textAlign: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
}
// List Styling
const listingStyle = {
    listStyle: 'none',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none'
};
// ListItem Styling
const listItemStyle = {
    textalign: 'center',
    textDecoration: 'none'
};

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
        <html>
            <body style={bodyStyling}>
            <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="backToHome">Back</a></li>
                </ul>
            </nav>
                <div style={centeredStyling}>
                    <a href="/" className="homeLink"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a>
                    <h1 className="title">Gotta Catch 'Em All</h1>
                    <h2 className="pokeName">{pokemon.name}</h2>
                    <img style={imageStyling} src={pokemon.img} alt={pokemon.name}></img>
                    <br />
                    <br />
                    <br />
                </div>
            </body>
        </html>
        )
    }
}

export default Show;