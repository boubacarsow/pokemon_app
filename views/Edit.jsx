import React, { Component } from 'react'
export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(this.props.Pokemon);
    return (
      <div>
        <body style={bodyStyling}>
        <nav style={navStyling}>
                <ul style={listingStyle}>
                    <li style={listItemStyle}><a href="/" className="newButton"> Go Back</a></li>
                </ul>
            </nav>
        <h1 className="title">Edit Pokemon</h1>
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name} /><br />
            Image: <input type="text" name="img" defaultValue={pokemon.img} /><br />
            <input type="submit" value="Submit Changes" />
        </form>
        </body>
      </div>
    )
  }
}