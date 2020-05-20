import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"
import withToggle from './withToggle'

type ViewEditToggleProps =  {
    isToggleStatus : boolean
    onToggle : any

}
@observer
class ViewEditToggle extends React.Component<ViewEditToggleProps>{
    @observable value = "Click on the edit button to start editing"
    handleOnchange = (event) => {
        this.value = event.target.value
    }
    render(){
        const {isToggleStatus, onToggle} = this.props
        return(
            <div className="bg-gray-300 p-2">
                <p className="font-bold text-center p-2">ViewEditToggle</p>
                <div className="justify-center flex">
                    {isToggleStatus? 
                    <input type="text" className="bg-gray-300 border border-blue-200 p-2" value = {this.value} onChange={this.handleOnchange}/>:
                    <p>{this.value}</p>
                }
                    <button className="bg-blue-600 p-1 pr-4 pl-4 ml-2 rounded" onClick={onToggle}>{isToggleStatus?"Cancel":"Edit"}</button>
                </div>
            </div>
        )
    }
    
} 

export default withToggle(ViewEditToggle)