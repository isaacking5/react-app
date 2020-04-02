import React from 'react'
import { withRouter } from "react-router";
class YourState extends React.Component {
    state = {
        userState: "",
        displayState: "",
    }
    handleOnChange = (event) => {
        this.setState({ userState: event.target.value });
    }
    handleOnSubmit = (event) => {
        this.setState({ displayState: `I'am from "${this.state.userState}" state` });
        event.preventDefault();

    }
    displayMessage = () => {
        return (this.state.displayState);
    }
    navigateToBack = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
            <button  onClick = {this.navigateToBack}>go back</button>
            <form onSubmit={this.handleOnSubmit}>
            <label>
                Pick your favorite flavor:
                <select value={this.state.value} onChange={this.handleOnChange}>
                    <option value="Telangana">Telangana</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Vizag">Vizag</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
            </label>
        <button>Submit</button>
        <p>{this.displayMessage()}</p>
      </form>
      </div>
        );
    }
}

export default withRouter(YourState);
// export { YourState };
// ReactDOM.render(<YourState />, document.getElementById("root"));
