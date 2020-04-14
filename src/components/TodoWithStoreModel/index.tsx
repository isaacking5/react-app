import React from 'react';
import {observer} from 'mobx-react'
import {reaction} from 'mobx';

import todoStore from '../../stores/todoStore/index'

import './todo.css';
import TodoList from './todoList'
import Footer from './footer'

@observer
class TodosMobXmodel extends React.Component {
    removeTask = (indexOfTodo) => {
        todoStore.onRemoveTodo(indexOfTodo)
    }

    handleEnterKey = (event) => {
        todoStore.onAddTodo(event)
    }
    clearCompletedTodos = () => {
        todoStore.onClearCompleted()
    }

// reaction HandsOn
    // todoAdd = reaction(()=>todoStore.todosOfUser.length , (length)=>{console.log("todosLength", length)})\
    afterCompleteAllTodos = reaction(()=>todoStore.todosOfUser.filter(eachEl =>{
        return eachEl.isCompleted === true
    }), (task)=> {if(todoStore.todosOfUser.length === task.length)
                        alert("congratulation all todos are completed");
    })
    
//recation end
    render() {
        const selectedTodoList = todoStore.filteredTodos
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
                    <TodoList todos = {selectedTodoList}  removeTask = {this.removeTask}/>
                    <Footer activeTodosCount = {todoStore.activeTodosCount} todosInList = {todoStore.todosInList} 
                        activeTodos = {todoStore.onChnageSelectedFilters} 
                        allTodos = {todoStore.onChnageSelectedFilters} 
                        completedTodos = {todoStore.onChnageSelectedFilters} 
                        clearCompletedTodos = {this.clearCompletedTodos} />
                </div>
            </div>
            </div>
        );
    }
}

export default TodosMobXmodel
