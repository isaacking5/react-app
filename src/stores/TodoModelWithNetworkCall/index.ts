import { observable, action} from 'mobx';

class TodoModel{
@observable id
@observable title
@observable completed

constructor (todoTask){
        this.id = todoTask.id.toString()
        this.title = todoTask.title
        this.completed = todoTask.completed
    }

@action.bound
onCompleteTodo(){
    this.completed = this.completed ? false: true
}

@action.bound
onUpdateTodaTitle(event){
    this.title = event.target.value
}
}

export default TodoModel