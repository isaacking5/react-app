import React from 'react';
import {observer, inject} from 'mobx-react'
import {observable, reaction, toJS} from 'mobx';


import './todo.css';
import TodoList from './todoList'
import Footer from './footer'
import LoadingWrapperWithFailure from "../common/LoadingWrapperWithFailure";
import NoDataView from "../common/NoDataView";
import TodoStore from "../../stores/TodoStoreWithNetWorkCall";

type TodosWithNetWorkCallProps = {
    todoStore : any
}

@inject("todoStore")
@observer
class TodosWithNetWorkCall extends React.Component<TodosWithNetWorkCallProps> {
    componentDidMount = () =>{
       this.doNetworkCalls()
    }

    getTodoStore = () =>{
        return this.props.todoStore
    }

    doNetworkCalls = () =>{
        this.getTodoStore().getTodoAPI()
    }
    removeTask = (indexOfTodo) => {
        this.getTodoStore().onRemoveTodo(indexOfTodo)
    }

    handleEnterKey = (event) => {
        this.getTodoStore().onAddTodo(event)
    }
    clearCompletedTodos = () => {
        this.getTodoStore().onClearCompleted()
    }
// reaction HandsOn
    
    // todoAdd = reaction(()=>todoStore.todosOfUser.length , (length)=>{console.log("todosLength", length)})\
    afterCompleteAllTodos = reaction(()=>this.props.todoStore.todosOfUser.filter(eachEl =>{
        return eachEl.completed === true
    }), (task)=> {if(this.props.todoStore.todosOfUser.length === task.length)
                    alert("congratulation all todos are completed");
    })

//recation end



    renderSuccessUI = observer(() =>{
        const selectedTodoList = this.getTodoStore().filteredTodos
        const {todosOfUser} = this.getTodoStore()
        if(todosOfUser.length === 0){
            return <NoDataView />
        }
       return <TodoList todos = {selectedTodoList}  removeTask = {this.removeTask}/>
    })
    
    render() {
        console.log("render")
        const {getTodosApiStatus, getTodosApiError, todosOfUser, todosInList} = this.getTodoStore()
        console.log(todosOfUser)
        return (
            <div className = "todo-list-body-container">
              <div className = "main-todo-conatiner">
                <div className="todo-list">
                    <h1 className = "main-heading">Todos</h1>
                </div>
                <div className="todo-list-container">
                    <input className="adding-elements" type="text" placeholder = "What need to be Done...!"
                    onKeyDown = {this.handleEnterKey}
                    />
                    <LoadingWrapperWithFailure
                        apiStatus = {getTodosApiStatus}
                        apiError = {getTodosApiError}
                        onRetryClick = {this.doNetworkCalls}
                        renderSuccessUI = {this.renderSuccessUI}
                    />
                    <Footer activeTodosCount = {this.getTodoStore().activeTodosCount}  todosInList = {todosInList}
                        activeTodos = {this.getTodoStore().onChnageSelectedFilters} 
                        allTodos = {this.getTodoStore().onChnageSelectedFilters} 
                        completedTodos = {this.getTodoStore().onChnageSelectedFilters} 
                        clearCompletedTodos = {this.clearCompletedTodos} />
                </div>
            </div>
            </div>
        );
    }
}

export default TodosWithNetWorkCall