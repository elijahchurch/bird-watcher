import React from "react";
import PropTypes from "prop-types";
import {v4} from "uuid";
import ReusableForm from "./ReusableForm";

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
            <ReusableForm
                formSubmissionHandler={handleNewBirdSightingSubmission}
                buttonText = "Add new bird sighting"/>
        </React.Fragment>
    )
}

NewBirdForm.propTypes = {
    onNewBirdCreation: PropTypes.func
};

export default NewBirdForm;