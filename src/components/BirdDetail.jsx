import React from "react";
import PropTypes from "prop-types";

function BirdDetail(props){
    const {bird, onClickingDelete} = props;
    return(
        <React.Fragment>
            <h1>Bird details</h1>
            <h3>{bird.species}</h3>
            <p>Coloring: {bird.coloring}</p>
            <p>Location: {bird.location}</p>
            <button onClick ={()=> onClickingDelete(bird.id)}>Delete bird sighting</button>
            <hr/>
        </React.Fragment>
    );
}

BirdDetail.propTypes = {
    bird: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default BirdDetail;