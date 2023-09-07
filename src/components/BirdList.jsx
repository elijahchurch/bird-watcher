import React from "react";
import Bird from "./Bird";
import PropTypes from "prop-types"

function BirdList(props){
    return(
        <React.Fragment>
            {props.birdList.map((bird) =>
            <Bird 
                whenBirdClicked = { props.onBirdSelection }
                species={bird.species}
                location={bird.location}
                coloring={bird.coloring}
                id={bird.id}
                key={bird.id} />
            )}
        </React.Fragment>
    );
}

BirdList.propTypes={
    birdList: PropTypes.array,
    onBirdSelection: PropTypes.func
};

export default BirdList;