import { observable, action, computed, toJS } from "mobx";
import EventModel from "../EventModel";

class StoreEvent{
    @observable events = [];

    @action.bound
    onAddEvent(eventName, eventLocation){
        const EventModelList = new EventModel(eventName, eventLocation)
        this.events.push(EventModelList)
    }

    @action.bound
    onDeleteEvent(indexOfEvent){
        this.events.splice(indexOfEvent, 1);
    }

    @computed
    get noOfEvents(){

    }

}

const EventStore = new StoreEvent

export default EventStore