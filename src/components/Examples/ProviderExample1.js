import React from 'react'
import {Provider, inject, observer} from 'mobx-react'
import { observable } from 'mobx'
class A extends React.Component{
    render(){
        const value = "Value"
    return( 
        <Provider temp={value}>
            <B />
        </Provider>
    )
    }
}


@inject("temp")
@observer
class B extends React.Component{
    @observable name = ""

    onChangeHandle = (event) =>{
        this.name=event.target.value
    }
    render(){
        const {temp} = this.props
    return (
        <div>
        <input  className="bg-gray-300" type="text" value={this.name} onChange={this.onChangeHandle}/>
        <C temp={temp} name={this.name}/>
        </div>
    )
    }
}

@inject("temp")
class C extends React.Component{
    render(){
        const {temp, name} = this.props
        console.log("name", {name});
    return (
        <div>
            <p>{name}</p>
            <p>{temp}</p>
        </div>
    )
    }
}

export default A