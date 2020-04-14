import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

type AddEventProps = {
addEvent : Function
}

@observer
class AddEvent extends React.Component<AddEventProps>{
@observable eventName : string = ""
@observable eventLocation : string = ""

constuctor(){
    this.eventName= ""
    this.eventLocation = ""
}

onAddEvent = (event) =>{
    const {addEvent} = this.props
    addEvent(this.eventName, this.eventLocation)
    event.preventDefault()
    this.eventName=""
    this.eventLocation=""
}

onChangeEventName = (event) =>{
    this.eventName = event.target.value
}

onChangeEventLocation = (event) =>{
    this.eventLocation = event.target.value
}

render(){
    return (
        <div className="w-full flex justify-center">
        <form className = "flex w-3/4 border border-gray-700 m-4 justify-around items-center" onSubmit={this.onAddEvent}>
            <div className="flex flex-col w-1/3">
                <input className="border border-gray-600 p-2 m-4" placeholder="Event name" type="text"  value={this.eventName} onChange = {this.onChangeEventName} required/>
                <input className="border border-gray-600 p-2 m-4" type="text" placeholder="Event location" value={this.eventLocation} onChange = {this.onChangeEventLocation} required/>
            </div>
            <div>
                <button className="border border-gray-600 p-2 m-4">Add Event</button>
            </div>
        </form>
        </div>
    )
}
}

export default  AddEvent