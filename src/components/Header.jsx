import birdLogo from "./../assets/img/birdLogo.jpeg"
import React from "react";

function Header() {
    return (
        <React.Fragment>
            <h1>Swift Sightings</h1>
            <img className="logo" src={birdLogo}></img>
            <button>Search!</button>
            <hr/>
        </React.Fragment>
    )
}

export default Header;