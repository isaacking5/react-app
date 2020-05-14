// import React from "react";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer
// class HiddenMessage extends React.Component {
//   @observable shouldShowMessage = false;

//   @action.bound
//   onShowOrHideMessage(e) {
//     this.shouldShowMessage = e.target.checked;
//   }

//   render() {
//     const { children } = this.props;
//     return (
//       <div>
//         <label htmlFor="toggle">Show Message</label>
//         <input
//           id="toggle"
//           type="checkbox"
//           onChange={this.onShowOrHideMessage}
//           checked={this.shouldShowMessage}
//         />
//         {this.shouldShowMessage ? children : null}
//       </div>
//     );
//   }
// }

// export default HiddenMessage;





export const Add = (a,b) =>{
    if(typeof a === 'string' || typeof b === "string")
        return null;
    return a+b
}

export const AddItemsToList = (list,newItem) =>{
    list.push(newItem);
    return list
}

export const RemoveItemsToList = (list,index) =>{
    list.splice(index,1);
    return list
}

export const UpdateItemsToList = (list,index, newItem) =>{
    list[index] = newItem
    return list
}