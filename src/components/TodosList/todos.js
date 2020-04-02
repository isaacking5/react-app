import React from 'react';
import './todos.css';
let todosOfUser = [];
class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todosInList: false,
            clearCompletedButton: false,
        };
    }

    completedTask = (idOfTodo) => {
        const duplicateArr = this.state.todos;
        duplicateArr[idOfTodo].isCompleted ? duplicateArr[idOfTodo].isCompleted = false : duplicateArr[idOfTodo].isCompleted = true;
        this.setState({ todos: duplicateArr });

        if (todosOfUser.length === 0)
            this.setState({ todosInList: false });
    }

    removeTask = (indexOfTodo) => {
        todosOfUser.splice(indexOfTodo, 1);
        this.setState({ todos: todosOfUser });

        if (todosOfUser.length === 0)
            this.setState({ todosInList: false });
    }

    handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value !== "") {
                const todoTask = {
                    id: (this.state.todos).length + 1,
                    task: event.target.value,
                    isCompleted: false,
                };
                todosOfUser.push(todoTask);
                this.setState({ todos: todosOfUser });
                event.target.value = "";
                this.setState({ todosInList: true });
            }
            else
                alert("Todos Should not be empty");
        }
    }

    allTodos = () => {
        this.setState({ todos: todosOfUser });
    }

    activeTodos = () => {
        const activeTodosList = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== true);
        });
        this.setState({ todos: activeTodosList });
    }

    todosLeft = () => {
        let todosCount = 0;
        todosOfUser.forEach((eachEl) => {
            if (eachEl.isCompleted !== true)
                todosCount++;
        });
        return (todosCount);
    }

    completedTodos = () => {
        const completedTodosList = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== false);
        });
        this.setState({ todos: completedTodosList });
    }

    clearCompletedTodos = () => {
        todosOfUser = todosOfUser.filter((eachEl) => {
            return (eachEl.isCompleted !== true);
        });
        this.setState({ todos: todosOfUser });

        if (todosOfUser.length === 0)
            this.setState({ todosInList: false });
    }

    renderTodoList = () => {
        const todoListItems = this.state.todos.map((eachEl) => {
            let eachElIndex = (this.state.todos).indexOf(eachEl);
            return (
                <li key={(eachEl.id).toString()} className="items todo-li-items">
              <i className= {this.state.todos[eachElIndex].isCompleted ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={() => this.completedTask(eachElIndex)}></i>
              <input type="text" className={this.state.todos[eachElIndex].isCompleted ? "text lineThrough":"text"} defaultValue = {eachEl.task}/>
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
                    <div className={this.state.todosInList ? "footer-todo-list footer-display": "footer-todo-list footer-none"}>
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

export { Todos };
// ReactDOM.render(<Todos />, document.getElementById("root"));
