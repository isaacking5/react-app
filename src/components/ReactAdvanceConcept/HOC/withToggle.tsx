import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

const withToggle = WrappedComponent =>{
    @observer
    class WithToggle extends React.Component{
        @observable isToggleStatus = false
    
        onToggle = () =>{
            this.isToggleStatus = !this.isToggleStatus
        }
    
        render(){
            return (
                <WrappedComponent 
                    isToggleStatus = {this.isToggleStatus}
                    onToggle = {this.onToggle}
                />
            )
        }
    }

    return WithToggle
}

export default withToggle

