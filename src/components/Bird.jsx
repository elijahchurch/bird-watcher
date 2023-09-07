import React from "react";
import PropTypes from "prop-types";

function Bird(props){
    return(
        <React.Fragment>
            <h3>{props.species}</h3>
            <h3>{props.location}</h3>
            <h3>{props.coloring}</h3>
        </React.Fragment>
    );
}

Bird.propTypes ={
    species: PropTypes.string,
    location: PropTypes.string,
    coloring: PropTypes.coloring
};

export default Bird;