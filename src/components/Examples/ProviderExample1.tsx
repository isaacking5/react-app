import React from 'react'

class A extends React.Component{
    render(){
       return (<div>hai</div>)
    }
}

export default A


// import React from 'react'
// import {Provider, inject, observer} from 'mobx-react'
// import { observable } from 'mobx'

// type tempProps = {
//     temp : string
//     name : string
// }

// class A extends React.Component <tempProps>{
//     render(){
//         const value : string = "Value"
//     return( 
//         <Provider temp = {value}>
//             <B />
//             {/* <h1>jai</h1> */}
//         </Provider>
//     )
//     }
// }

// @inject("temp")
// @observer
// class B extends React.Component{
//     @observable name : string = ""

//     onChangeHandle = (event) =>{
//         this.name=event.target.value
//     }
//     render(){
//         const {temp} = this.props
//     return (
//         <div>
//         <input  className="bg-gray-300" type="text" value={this.name} onChange={this.onChangeHandle}/>
//         <C temp={temp} name={this.name}/>
//         </div>
//     )
//     }
// }

// @inject("temp")
// class C extends React.Component <tempProps>{
//     render(){
//         const {temp, name} = this.props
//         console.log("name", {name});
//     return (
//         <div>
//             <p>{name}</p>
//             <p>{temp}</p>
//         </div>
//     )
//     }
// }

// export default A