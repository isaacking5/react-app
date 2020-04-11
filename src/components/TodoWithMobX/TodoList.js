import React from 'react';
<<<<<<< HEAD
import { observer } from 'mobx-react'
import { observable, toJS } from 'mobx';
=======
import {observer} from 'mobx-react'
import { observable,  toJS, action, configure} from 'mobx';
>>>>>>> c183ddd6eca55986299b6db65c3d22725e77c9ff
import './todoCSS.css';
let todosOfUser = [];

@observer
class TodosMobX extends React.Component {
    @observable todos = [];
    @observable todosInList = false;
    @observable clearCompletedButton = false;

    completedTask = (idOfTodo) => {
        todosOfUser[idOfTodo].isCompleted ? todosOfUser[idOfTodo].isCompleted = false : todosOfUser[idOfTodo].isCompleted = true;
        this.todos = todosOfUser

        if (todosOfUser.length === 0)
            this.todosInList = false
    }

    removeTask = (indexOfTodo) => {
        todosOfUser.splice(indexOfTodo, 1);
        this.todos = todosOfUser

        if (todosOfUser.length === 0)
            this.todosInList = false
    }

    handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value !== "") {
                const todoTask = {
                    id: (this.todos).length + 1,
                    task: event.target.value,
                    isCompleted: false,
                };
                todosOfUser.push(todoTask);
                this.todos = todosOfUser;
                event.target.value = "";
                this.todosInList = true
            }
            else
                alert("Todos Should not be empty");
        }
    }

 
    allTodos = () => {
        this.todos = todosOfUser
    }


    activeTodos = () => {
        const activeTodosList = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== true);
        });
        this.todos = activeTodosList
    }


    todosLeft = () => {
        let todosCount = 0;
        todosOfUser.forEach((eachEl) => {
            console.log(toJS(eachEl))
            if (eachEl.isCompleted !== true) {
                todosCount++;
                console.log("log")
            }
        });
        return (todosCount);
    }

    completedTodos = () => {
        const completedTodosList = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== false);
        });
        this.todos = completedTodosList
    }

    clearCompletedTodos = () => {
        todosOfUser = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== true);
        });
        this.todos = todosOfUser

        if (todosOfUser.length === 0)
            this.todosInList = false
    }

    renderTodoList = () => {
        const todoListItems = this.todos.map((eachEl) => {
            let eachElIndex = (this.todos).indexOf(eachEl);
            return (
                <li key={(eachEl.id).toString()} className="items todo-li-items">
              <i className= {this.todos[eachElIndex].isCompleted ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={() => this.completedTask(eachElIndex)}></i>
              <input type="text" className={this.todos[eachElIndex].isCompleted ? "text lineThrough":"text"} defaultValue = {eachEl.task}/>
              <i className="fa fa-close de" onClick={() => this.removeTask(eachElIndex)}></i>
            </li>
            );
        });
        return (todoListItems);
    }
    render() {
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
                    <ul className = "todo-ul-tag">
                        {this.renderTodoList()}
                    </ul>
                    <div className={this.todosInList ? "footer-todo-list footer-display": "footer-todo-list footer-none"}>
                        <span>{this.todosLeft()} Todos left</span>
                        <div>
                            <button className="filter-buttons" onClick = {this.allTodos}>All</button>
                            <button className="filter-buttons" onClick = {this.activeTodos}>Active</button>
                            <button className="filter-buttons" onClick = {this.completedTodos}>Completed</button>
                        </div>
                        <button className="filter-buttons filter-clear-completed-buttons" onClick = {this.clearCompletedTodos}>Clear completed</button>
                    </div>
                </div>
            </div>
            
            </div>
        );
    }
}

export default TodosMobX
// ReactDOM.render(<Todos />, document.getElementById("root"));
