import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";

function NewBirdForm(props){

    function handleNewBirdSightingSubmission(event) {
        event.preventDefault();
        props.onNewBirdCreation({
            species: event.target.species.value,
            location: event.target.location.value,
            coloring: event.target.coloring.value,
            id: v4()
        });
    }

    return (
        <React.Fragment>
            <form onSubmit={handleNewBirdSightingSubmission}>
                <input
                    type='text'
                    name='species'
                    placeholder='Species' />
                <input
                    type='text'
                    name='location'
                    placeholder='Location'/>
                <input
                    type='text'
                    name='coloring'
                    placeholder='Coloring' />
                <button type='submit'>Record sighting</button>
            </form>
        </React.Fragment>
    )
}

NewBirdForm.propTypes = {
    onNewBirdCreation: PropTypes.func
};

export default NewBirdForm;