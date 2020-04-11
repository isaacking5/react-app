import React from 'react'
import {observable, toJS} from 'mobx'
import { observer } from 'mobx-react'

@observer
class Events extends React.Component{
    @observable isEditEvent
    @observable eventName
    @observable eventLocation

    constructor(props){
        super(props)
        this.isEditEvent = false
        this.eventName = this.props.eachEvent.name
        this.eventLocation = this.props.eachEvent.location
    }

    onDeleteEvent = (indexOfEachEl) =>{
        const{onDeleteEvent} = this.props
        onDeleteEvent(indexOfEachEl)
    }

    onChangeEventName = (event) =>{
        this.eventName = event.target.value
    }

    onChangeEventLocation = (event) =>{
        this.eventLocation = event.target.value
    }

    onUpdateEventDetails = () =>{
        const {eachEvent} = this.props
        this.isEditEvent = !(this.isEditEvent)
        eachEvent.onUpdateEventDetails(this.eventName, this.eventLocation)
        
    }

    render () {
        console.log("edit is logged", this.isEditEvent)
        const {eachEvent, EventList} = this.props
        if(this.isEditEvent !== true)
        {
            return (
            <li className="flex p-4 border border-gray-700 w-4/5 justify-around mt-2">
                <div className="flex flex-col m-3 w-1/2">
                    <input className="bg-gray-300 p-3 m-3" type="text" disabled = {true} value ={`Event name:- ${this.eventName}`} />
                    <input className="bg-gray-300 p-3 m-3" type="text" disabled = {true} value={`Event location:- ${this.eventLocation}`} />
                </div>
                <div className="flex flex-col m-3">
                    <button className="border border-gray-600 p-3 m-3" onClick={this.onUpdateEventDetails}>Edit</button>
                    <button className="border border-gray-600 p-3 m-3" onClick={()=>this.onDeleteEvent(EventList.indexOf(eachEvent))}>Delete</button>
                </div>
            </li>
            )
        }

        else{
           return( <li className="flex p-4 border border-gray-700 w-4/5 justify-around mt-2">
                <div className="flex flex-col m-3 w-1/2">
                    <input className="bg-gray-300 p-3 m-3 border border-gray-600" type="text" disabled = {false} onChange={this.onChangeEventName} placeholder="Event name" value ={this.eventName} />
                    <input className="bg-gray-300 p-3 m-3 border border-gray-600" type="text" disabled = {false} onChange={this.onChangeEventLocation} placeholder="Event location" value={this.eventLocation} />
                </div>
                <div className="flex flex-col m-3">
                    <button className="border border-gray-600 p-3 m-3" onClick={this.onUpdateEventDetails}>Update</button>
                </div>
            </li>
        );
        }
    }

}

export default Events