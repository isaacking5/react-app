import { observable, action, computed} from "mobx";
import EventModel from "../EventModel";

class StoreEvent{
    @observable events : any = [];

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
        return ""
    }

}

const EventStore = new StoreEvent()

export default EventStore