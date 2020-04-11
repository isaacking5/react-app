import { observable, action } from "mobx"

class EventModel{
    id
    @observable name
    @observable location

    constructor(eventName, eventLocation){
        this.id = Math.random.toString()
        this.name = eventName
        this.location = eventLocation

    }

    @action.bound
    onUpdateEventDetails(eventName, eventLocation){
        this.eventName = eventName;
        this.eventLocation = eventLocation;

    }
}
export default EventModel

