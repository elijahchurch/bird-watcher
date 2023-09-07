import React from "react";
import PropTypes from "prop-types";

function Bird(props){
    return(
        <React.Fragment>
            <div onClick = {() => props.whenBirdClicked(props.id)}>
                <h3>{props.species}</h3>
                <p>Coloring: {props.coloring}</p>
                <p>Location sighted: {props.location}</p>
                <hr/>
            </div>

        </React.Fragment>
    );
}

Bird.propTypes ={
    species: PropTypes.string,
    location: PropTypes.string,
    coloring: PropTypes.coloring,
    id: PropTypes.string,
    whenBirdClicked: PropTypes.func
};

export default Bird;