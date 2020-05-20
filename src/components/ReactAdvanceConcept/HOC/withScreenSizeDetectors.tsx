import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

const withScreenSizeDetectors = WrappedComponent => {
    @observer
    class WithScreenSizeDetectors extends React.Component{
        @observable type:any = null

        componentDidMount(){
            const width = window.innerWidth
            if(width < 576)
                this.type = "Mobile" 
            else if(width >= 576 && width < 992)
                this.type = "Tablet"
            else 
                this.type = "Desktop"

            window.addEventListener("resize",this.updatedWindowSize)
        }
        
        updatedWindowSize = () =>{
            const width = window.innerWidth
            if(width < 576)
                this.type = "Mobile" 
            else if(width >= 576 && width < 992)
                this.type = "Tablet"
            else 
                this.type = "Desktop"
        }
        
        render(){
            return (
                <WrappedComponent type = {this.type}/>
            )
        }
    }

    return WithScreenSizeDetectors
}

export default withScreenSizeDetectors