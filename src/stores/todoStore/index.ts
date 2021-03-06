import { observable, action, computed, toJS} from 'mobx';

import TodoModel from '../../stores/todoModel/index'

type todoTaskProps = {
    id : number
    task : string
    isCompleted : boolean
}

class TodoStore{
    @observable todosOfUser:Array<todoTaskProps> = [];
    @observable selectedFilter = "All";  //"Completed", "Active"
    @observable todosInList = false

    @action.bound
    onAddTodo(event){
        if (event.key === 'Enter') {
            if (event.target.value !== "") {
                const todoTask = {
                    id: Math.random().toString(),
                    task: event.target.value,
                    isCompleted: false,
                };
                const todoModel = new TodoModel(todoTask)
                this.todosOfUser.push(todoModel);
                // this.todos = this.todosOfUser
                event.target.value = "";
                this.todosInList = true
            }
            else
                alert("Todos Should not be empty");
        }
    }

    @action.bound
    onRemoveTodo(clickedTodoId){
        this.todosOfUser = this.todosOfUser.filter((eachEl)=>{
            return clickedTodoId !== eachEl.id
        })
        //this.todosOfUser.splice(clickedTodoId, 1);
        // this.todos = todoStore.todosOfUser

        if (todoStore.todosOfUser.length === 0)
            this.todosInList = false
    }

    @action.bound
    onChnageSelectedFilters(filterType){
        this.selectedFilter = filterType;
    }

    @action.bound
    onClearCompleted(){
        this.todosOfUser = this.todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== true);
        });

        if (this.todosOfUser.length === 0)
            this.todosInList = false

    }

    @computed
    get activeTodosCount(){
        let count = 0;
        this.todosOfUser.forEach((eachEl)=>{
            if(eachEl.isCompleted === false)
                count++;
        })
        return count;
    }

    get filteredTodos(){
        let selectedTodoFilter
        switch(this.selectedFilter)
        {
            case 'All':
                selectedTodoFilter = this.todosOfUser
                break;
            case 'Active':
                selectedTodoFilter = this.todosOfUser.filter((eachEl)=>{
                    if(eachEl.isCompleted === false)
                     return eachEl;
                });
                break;
            case 'Completed':
                selectedTodoFilter = this.todosOfUser.filter((eachEl)=>{
                    if(eachEl.isCompleted === true)
                     return eachEl;
                });
                break;
        }
        return selectedTodoFilter
    }
}

const todoStore = new TodoStore()
export default todoStore   