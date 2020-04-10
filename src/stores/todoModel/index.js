import { observable, action} from 'mobx';

class TodoModel{
@observable id
@observable task
@observable isCompleted

constructor (todoTask){
        this.id = todoTask.id.toString()
        this.task = todoTask.task
        this.isCompleted = todoTask.isCompleted
    }

@action.bound
onCompleteTodo(){
    this.isCompleted = this.isCompleted ? false: true
}

@action.bound
onUpdateTodaTitle(){
    this.task = event.target.value
}
}

export default TodoModel