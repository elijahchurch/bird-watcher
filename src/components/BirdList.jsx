import React from "react";
import Bird from "./Bird";
import PropTypes from "prop-types"

function BirdList(props){
    return(
        <React.Fragment>
            {props.birdList.map((bird, index) =>
            <Bird species={bird.species}
            location={bird.location}
            coloring={bird.coloring}
            key={index} />
            )}
        </React.Fragment>
    );
}

BirdList.propTypes={
    birdList: PropTypes.array
};

export default BirdList;