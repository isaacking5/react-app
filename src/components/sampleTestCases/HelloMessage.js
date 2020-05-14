import React from 'react'

class HelloMessage extends React.Component{
    render(){
        return(<span>{`Hello ${this.props.message}`}</span>)
    }
}
export default HelloMessage