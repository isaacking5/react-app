import React from 'react';
import { Offline, Online } from "react-detect-offline";
import {observer} from 'mobx-react'
import {observable, reaction, toJS} from 'mobx';
import Loader from 'react-loader-spinner'

import todoStore from '../../stores/TodoStoreWithNetWorkCall/index'

import './todo.css';
import TodoList from './todoList'
import Footer from './footer'

@observer
class TodosWithNetWorkCall extends React.Component {

    @observable isLoading = true
    @observable isNetWorkCall = true
    @observable isOnline =  window.navigator.onLine
    componentDidMount = () =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
            // todoStore.updateTodoWithNetworkCall(json)
            setTimeout(()=>{
                this.isLoading = false
                todoStore.updateTodoWithNetworkCall(json)
            } ,1000)
        })
        .catch(response =>{
            this.isNetWorkCall = false
            this.isLoading = false
        })
    }
    removeTask = (indexOfTodo) => {
        todoStore.onRemoveTodo(indexOfTodo)
    }

    handleEnterKey = (event) => {
        this.isNetWorkCall = true
        todoStore.onAddTodo(event)
    }
    clearCompletedTodos = () => {
        todoStore.onClearCompleted()
    }

    loadPageWhenOnline = () =>{
        this.isOnline =  window.navigator.onLine
        if(this.isOnline)
        {
            this.isLoading = true
            this.isNetWorkCall = true
            this.componentDidMount()
        }
    }

// reaction HandsOn
    // todoAdd = reaction(()=>todoStore.todosOfUser.length , (length)=>{console.log("todosLength", length)})\
    afterCompleteAllTodos = reaction(()=>todoStore.todosOfUser.filter(eachEl =>{
        return eachEl.completed === true
    }), (task)=> {if(todoStore.todosOfUser.length === task.length)
                    alert("congratulation all todos are completed");
    })
    
//recation end
    render() {
        console.log(this.isOnline)
        const selectedTodoList = todoStore.filteredTodos
        return (
            <div className = "todo-list-body-container">
            {this.isOnline?
              (<div className = "main-todo-conatiner">
                <div className="todo-list">
                    <h1 className = "main-heading">Todos</h1>
                </div>
                <div className="todo-list-container">
                    <input className="adding-elements" type="text" placeholder = "What need to be Done...!"
                    onKeyDown = {this.handleEnterKey}
                    />
                    { this.isLoading?
                        <Loader type="ThreeDots" color="#00BFFF" className="w-80 h-80 flex justify-center"/>:
                        this.isNetWorkCall?
                        <TodoList todos = {selectedTodoList}  removeTask = {this.removeTask}/>:
                        <div className = "m-12 text-center text-2xl">No data found..!</div>
                    }
                    <Footer activeTodosCount = {todoStore.activeTodosCount} todosInList = {todoStore.todosInList} 
                        activeTodos = {todoStore.onChnageSelectedFilters} 
                        allTodos = {todoStore.onChnageSelectedFilters} 
                        completedTodos = {todoStore.onChnageSelectedFilters} 
                        clearCompletedTodos = {this.clearCompletedTodos} />
                </div>
            </div>):
            (<div>
                <p className = "text-2xl m-4 font-semibold subpixel-antialiased">Network Error</p>
                <button className = "text-gray-100 text-xl p-2 pr-6 pl-6 ml-12 border rounded-md bg-blue-500 shadow font-semibold" onClick={this.loadPageWhenOnline}>Retry</button>
            </div>)
            }
            </div>
        );
    }
}

export default TodosWithNetWorkCall
