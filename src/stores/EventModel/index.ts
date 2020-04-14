import { observable, action } from "mobx"

class EventModel{
    id
    @observable name : string
    @observable location :string

    constructor(eventName, eventLocation){
        this.id = Math.random.toString()
        this.name = eventName
        this.location = eventLocation

    }

    @action.bound
    onUpdateEventDetails(eventName, eventLocation){
        this.name = eventName;
        this.location = eventLocation;

    }
}
export default EventModel

