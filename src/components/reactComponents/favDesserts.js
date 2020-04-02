import React from 'react'
import { withRouter } from "react-router";

function Radio(props) {
    return (<div><input type="radio" name="favriouteDessert" value={props.favriouteDessert} required onChange={props.onchange}/>
     <label htmlFor={props.favriouteDessert}>{props.favriouteDessert}</label></div>);
}

class Desserts extends React.Component {
    state = {
        selectedDessert: "",
        favoriteDessert: ""
    }
    handleOnChange = (event) => {
        this.setState({ selectedDessert: event.target.value });
    }
    handleOnSubmit = (event) => {
        this.setState({ favoriteDessert: `My favrioute Desserts is ${this.state.selectedDessert}` });
        event.preventDefault();

    }
    displayMessage = () => {
        return (this.state.favoriteDessert);
    }

    navigateToBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
            <button onClick={this.navigateToBack}>go back</button>
            <form onSubmit = {this.handleOnSubmit}>
                <p>Select your favrioute Desserts:</p>
                <Radio favriouteDessert = "Vanilla" onchange = {this.handleOnChange}/>
                <Radio favriouteDessert = "Butterscotch" onchange = {this.handleOnChange}/>
                <Radio favriouteDessert = "Gulab Jamum" onchange = {this.handleOnChange}/>
                <Radio favriouteDessert = "Yoghurt Pots" onchange = {this.handleOnChange}/>
                <Radio favriouteDessert = "Baked Banana" onchange = {this.handleOnChange}/>
                <Radio favriouteDessert = "Chocolate" onchange = {this.handleOnChange}/>
                <button>Make your Choice</button>
                <p>{this.displayMessage()}</p>
            </form>
            </div>
        );
    }
}

export default withRouter(Desserts);
// export { Desserts };
// ReactDOM.render(<Desserts />, document.getElementById("root"));
