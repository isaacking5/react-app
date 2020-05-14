import React from 'react'
import {observer} from 'mobx-react'

import Events from './Event'
import EventModel from "../../stores/EventModel"

type EventListProps = {
    eventList : Array<EventModel>
    onDelete : Function
}

@observer
class EventList extends React.Component<EventListProps>{
    render(){
        const {eventList, onDelete} = this.props
        // console.log(toJS("eventList",eventList))
        const listOfEvents = eventList.map((eachEl)=>{
            return (
                <Events eachEvent = {eachEl} onDeleteEvent = {onDelete} EventList={eventList}/>
            )
        })
        return(
            <div className="w-full flex justify-center">
            <div className="flex w-3/4 border border-gray-700 mt-10 justify-center items-center flex-col">
                <p className="text-2xl">Number Of Events: {eventList.length}</p>
                <ul className="flex flex-col mt-4 w-full items-center p-4">{listOfEvents}</ul>
            </div>
            </div>
        )
    }
}

export default EventList