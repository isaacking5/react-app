import React from 'react'
import { withRouter } from "react-router";

function CheckBox(props) {
    return (<div><input type="checkbox" name="city" value={props.city} onChange={props.onchange}/>
     <label htmlFor={props.city}>{props.city}</label></div>);
}

class VisitedCities extends React.Component {
    state = {
        selectedState: [],
        SubmittedState: ""
    }
    handleOnChange = (event) => {
        const previousSelectedstate = this.state.selectedState;
        let updatedSelectedState = [];
        if (previousSelectedstate.length > 0 && (previousSelectedstate.find((eachEl) => {
                return eachEl === event.target.value;
            })) !== undefined) {
            updatedSelectedState = previousSelectedstate.filter((eachEl) => {
                console.log(eachEl);
                return eachEl !== event.target.value;
            });
            console.log(updatedSelectedState);
            this.setState({ selectedState: updatedSelectedState });
        }
        else {
            console.log("else");
            previousSelectedstate.push(event.target.value);
            this.setState({ selectedState: previousSelectedstate });
        }

    }

    handleOnSubmit = (event) => {
        this.setState({ SubmittedState: `Visited Cities are ${this.state.selectedState}` });
        event.preventDefault();

    }
    displayMessage = () => {
        return (this.state.SubmittedState);
    }
    navigateToBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        console.log(this.state.selectedState);
        return (
            <div>
            <button onClick = {this.navigateToBack}>go back</button>
            <form onSubmit = {this.handleOnSubmit}>
                <p>Which of the following cities you have been visited:</p>
                <CheckBox city = "Hyderabad" onchange = {this.handleOnChange}/>
                <CheckBox city = "Bangalore" onchange = {this.handleOnChange}/>
                <CheckBox city = "Vizag" onchange = {this.handleOnChange}/>
                <CheckBox city = "Pune" onchange = {this.handleOnChange}/>
                <CheckBox city = "Chennai" onchange = {this.handleOnChange}/>
                <CheckBox city = "Mumbai" onchange = {this.handleOnChange}/>

                <button>Make your Choice</button>
                <p>{this.displayMessage()}</p>
            </form>
            </div>
        );
    }
}

export default withRouter(VisitedCities);
// export { VisitedCities };
// ReactDOM.render(<VisitedCities />, document.getElementById("root"));
