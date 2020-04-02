import React from 'react';
import { withRouter } from "react-router";
class Greetings extends React.Component {
    state = {
        userInputValue: "",
        displayName: "",
    }
    handleOnChange = (event) => {
        this.setState({ userInputValue: event.target.value });
    }
    handleOnSubmit = (event) => {
        this.setState({ displayName: `Hello ${this.state.userInputValue} have a nice day`, userInputValue: "" });
        event.preventDefault();

    }
    displayMessage = () => {
        return (this.state.displayName);
    }
    navigateToBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
            <button onClick = {this.navigateToBack}>go back</button>
            <form onSubmit = {this.handleOnSubmit}>
            <input type="text" value = {this.state.userInputValue} onChange= {this.handleOnChange} placeholder="Enter your name"/>
            <button>Greet</button>
            <p>{this.displayMessage()}</p>
            </form>
            </div>
        );
    }
}

export default withRouter(Greetings);
// export { Greetings };
// ReactDOM.render(<Greetings />, document.getElementById("root"));
