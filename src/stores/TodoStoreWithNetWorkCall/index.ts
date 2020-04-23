import { observable, action, computed} from 'mobx';
import TodoServices from '../../services/TodoServices/index.api'
import TodoModel from '../TodoModelWithNetworkCall/index'
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

type todoTaskProps = {
    id : number
    title : string
    completed : boolean
}

class TodoStore{
    @observable todosOfUser:Array<todoTaskProps> = [];
    @observable selectedFilter;  //All,"Completed", "Active"
    @observable todosInList
    @observable getTodosApiStatus
    @observable getTodosApiError
    todoServices

    constructor(todoServices){
        this.todoServices = todoServices
        this.init()
    }

    @action.bound
    setTodoAPIResponse(todoResponse){
        this.todosInList = true
        todoResponse.forEach((eachEl)=>{
            // if(this.todosOfUser.length < 6){
                const todoModel = new TodoModel(eachEl)
                this.todosOfUser.push(todoModel)
            // }
        })
    }

    @action.bound
    setTodoAPIStatus(apiStatus){
        this.getTodosApiStatus = apiStatus
    }

    @action.bound
    setTodoAPIError(apiError){
        this.getTodosApiError = apiError
    }

    @action.bound
    getTodoAPI(){
        const todoServices = this.todoServices.getTodosAPI()
        return bindPromiseWithOnSuccess(todoServices)
        .to(this.setTodoAPIStatus, this.setTodoAPIResponse)
        .catch(this.setTodoAPIError)
    }


    @action.bound
    init(){
        this.getTodosApiStatus = API_INITIAL
        this.getTodosApiError = null
        this.selectedFilter = 'All'
        this.todosInList = false
    }

    @action.bound
    clearStore(){
        this.init()
    }

    @action.bound
    onAddTodo(event){
        if (event.key === 'Enter') {
            if (event.target.value !== "") {
                const todoTask = {
                    id: (this.todosOfUser).length + 1,
                    title: event.target.value,
                    completed: false,
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
    onRemoveTodo(indexOfTodo){
        this.todosOfUser.splice(indexOfTodo, 1);

        if (this.todosOfUser.length === 0)
            this.todosInList = false
    }

    @action.bound
    onChnageSelectedFilters(filterType){
        this.selectedFilter = filterType;
    }

    @action.bound
    onClearCompleted(){
        this.todosOfUser = this.todosOfUser.filter((eachEl) => {
            return (eachEl.completed !== true);
        });

        if (this.todosOfUser.length === 0)
            this.todosInList = false

    }

    @computed
    get activeTodosCount(){
        let count = 0;
        this.todosOfUser.forEach((eachEl)=>{
            if(eachEl.completed === false)
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
                    if(eachEl.completed === false)
                     return eachEl;
                });
                break;
            case 'Completed':
                selectedTodoFilter = this.todosOfUser.filter((eachEl)=>{
                    if(eachEl.completed === true)
                     return eachEl;
                });
                break;
        }
        return selectedTodoFilter
    }
}

// const todoServices = new TodoServices

// const todoStore = new TodoStore(todoServices)
export default TodoStore   