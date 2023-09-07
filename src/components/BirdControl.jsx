import React from "react";
import BirdList from "./BirdList";
import NewBirdForm from "./NewBirdForm"
import BirdDetail from "./BirdDetail";

class BirdControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage: false,
            mainBirdList: [],
            selectedBird: null
        };
    }

    handleChangingSelectedBird = (id) => {
        const selectedBird = this.state.mainBirdList.filter(bird => bird.id === id)[0];
        this.setState({selectedBird: selectedBird})
    }

    handleDeletingBird = (id) => {
        const newMainBirdList = this.state.mainBirdList.filter(bird => bird.id !== id);
        this.setState({
            mainBirdList: newMainBirdList,
            selectedBird: null
        });
    }

    handleClick = () => {
        if (this.state.selectedBird != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedBird: null
            });
        } else { this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
        }
    }

    handleAddingNewBird = (newBird) => {
        const newMainBirdList = this.state.mainBirdList.concat(newBird);
        this.setState({mainBirdList: newMainBirdList, formVisibleOnPage: false});
    }

    render(){
        let currentlyVisibleState = null;
        let buttonText = null;

        if (this.state.selectedBird != null){
            currentlyVisibleState = <BirdDetail bird = {this.state.selectedBird} onClickingDelete = {this.handleDeletingBird}/>
            buttonText="Return to bird list"
        }
        else if(this.state.formVisibleOnPage){
            currentlyVisibleState = <NewBirdForm onNewBirdCreation={this.handleAddingNewBird} />;
            buttonText = "Return to bird list";
        }
        else {
            currentlyVisibleState = <BirdList birdList={this.state.mainBirdList} onBirdSelection={this.handleChangingSelectedBird} />
            buttonText = "Add bird";
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
