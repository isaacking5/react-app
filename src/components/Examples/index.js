import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class A extends React.Component {
  @observable shouldShowMessage = false;

  @action.bound
  onShowOrHideMessage(e) {
    this.shouldShowMessage = e.target.checked;
  }

  render() {
    const { children } = this.props;
    // const children = "text message"
    return (
      <div>
        <label htmlFor="toggle">Show Message</label>
        <input
          id="toggle"
          type="checkbox"
          onChange={this.onShowOrHideMessage}
          checked={this.shouldShowMessage}
        />
        {this.shouldShowMessage ? children : null}
      </div>
    );
  }
}

export default A



// import React from 'react'
// import orderLine from './ProviderExample1'
// import { observable, action } from "mobx"
// import { observer } from "mobx-react";

// @observer
// class A extends React.Component{
//     @observable isClicked = false;

//     @action.bound
//     onClickedFn(){
//         this.isClicked = !this.isClicked
//         const {changePrice} = orderLine
//         changePrice()
//     }
//     render(){
//         console.log("render calling")
//         console.log(this.isClicked)
//         const {total} = orderLine
//         return (<div>   
//             <p>{total()}</p>
//             <button onClick = {this.onClickedFn}>change price</button>
//         </div>)
//     }
// }

// export default A