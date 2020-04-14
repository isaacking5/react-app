import React from 'react'
// import ../../stores/EventStore/index.ts

import EventStore from '../../stores/EventStore/index'

import AddEvent from './AddEvent'
import EventList from './EventList'


class EventApp extends React.Component{
    onAddEvent = (eventName, eventLocation) =>{
        EventStore.onAddEvent(eventName, eventLocation)
    }
    render(){
       return( 
       <div className="bg-gray-300 min-h-screen" >
            <p className="bg-gray-800 text-gray-300 p-2 text-center text-3xl">Event List</p>
            <AddEvent addEvent = {this.onAddEvent}/>
            <EventList eventList = {EventStore.events} onDelete = {EventStore.onDeleteEvent}/>
        </div>
       );
    } 
}

export default EventApp