import React from "react";
import BirdList from "./BirdList";
import NewBirdForm from "./NewBirdForm"

class BirdControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainBirdList: []
        };
    }

    handleClick = () => {
        this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }

    handleAddingNewBird = (newBird) => {
        const newMainBirdList = this.state.mainBirdList.concat(newBird);
        this.setState({mainBirdList: newMainBirdList, formVisibleOnPage: false});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;
        if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewBirdForm onNewBirdCreation={this.handleAddingNewBird}/>
            buttonText = "return to list"
        } else {
            currentlyVisibleState = <BirdList birdList={this.state.mainBirdList}/>;
            buttonText = "Add a new sighting!"
        }
        return(
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
        );
    }
}


export default BirdControl;
