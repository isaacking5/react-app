import React from 'react'
import { withRouter } from "react-router";
class DisableOrEnable extends React.Component {
    state = {
        isDisableButtonChecked: false,
        showMessage: ""
    }

    handleChange = () => {

        // this.setState({ isDisableButtonChecked: !(this.state.isDisableButtonChecked), showMessage: "oh oh!! I'am disabled" });
        this.setState((state) => ({
            isDisableButtonChecked: !(this.state.isDisableButtonChecked),
            showMessage: this.state.isDisableButtonChecked ? "" : "oh oh!! I'am disabled",
        }));
    }
    handleSubmit = () => {
        this.setState({ showMessage: "hey! I'am enabled" });
    }

    displayMessage = () => {
        return (this.state.showMessage);
    }

    navigateToBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    render() {
        return (
            <div>
            <button onClick={this.navigateToBack}>go back</button>
            <div><input type="checkbox" name="click me" onChange={this.handleChange}/>
     <label htmlFor="click me"><button onClick = {this.handleSubmit} disabled={this.state.isDisableButtonChecked}>Click me</button></label></div>
     <p>{this.state.showMessage}</p>
     </div>
        );
    }
}
export default withRouter(DisableOrEnable);
// export { DisableOrEnable };
// ReactDOM.render(<DisableOrEnable />, document.getElementById("root"));






// class SetStateAsync extends React.Component {
//     state = {
//         count: 0,
//     }
//     onIncrement = () => {
//         // this.setState({ count: this.state.count + 1 })
//         // console.log('log1', this.state.count);
//         // this.setState({ count: this.state.count + 1 })
//         // console.log('log2', this.state.count);
//         // this.setState({ count: this.state.count + 2 })
//         // console.log('log3', this.state.count);
//         this.setState(preState => ({
//             count: preState.count + 1
//         }));
//         console.log('log1', this.state.count);

//         this.setState(preState => ({
//             count: preState.count + 1
//         }));
//         console.log('log2', this.state.count);

//         this.setState(preState => ({
//             count: preState.count + 1
//         }));
//         console.log('log3', this.state.count);
//     }


//     render() {
//         return (
//             <button onClick = {this.onIncrement}>clickMe</button>
//         );
//     }
// }

// ReactDOM.render(<SetStateAsync />, document.getElementById("root"));



// class ChildCounter extends React.Component {
//     state = {
//         childCounter1: 0,
//         childCounter2: 0,
//     };

//     onInc = () => {
//         this.props.parentNode();
//         this.setState({ childCounter1: this.state.childCounter1 + 1 });
//     }

//     render() {
//         console.log("hii");
//         return (
//             <button onClick = {this.onInc}>click me</button>
//         );
//     }
// }



// class SetStateAsync extends React.Component {
//     state = {
//         count: 0,
//     }

//     onParenetCounterInc = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         console.log("parentComponent");
//         return (
//             <ChildCounter parentNode = {this.onParenetCounterInc} 
//             parentCount = {this.state.count}
//             />
//             // <button onClick = {this.onIncrement}>clickMe</button>
//         );
//     }
// }

// ReactDOM.render(<SetStateAsync />, document.getElementById("root"));
