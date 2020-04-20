import React from 'react'
import { observer } from 'mobx-react';


type TodoListProps = {
  todos: Array<any>
  removeTask : Function
}   

@observer
class TodoList extends React.Component <TodoListProps>{
renderTodoList = () => {
  const {todos, removeTask} = this.props
        const todoListItems = todos.map((eachEl) => {
            let eachElIndex = (todos).indexOf(eachEl);
            return (
            <li key={(eachEl.id).toString()} className="items todo-li-items">
              <i className= {todos[eachElIndex].completed ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={eachEl.onCompleteTodo}></i>
              <input type="text" className={todos[eachElIndex].completed ? "text lineThrough":"text"} defaultValue = {eachEl.title} onChange = {eachEl.onUpdateTodaTitle}/>
              <i className="fa fa-close de" onClick={() => removeTask(eachElIndex)}></i>
            </li>
            );
        });
        return (todoListItems);
    }

    render(){
      return(
        <ul className = "todo-ul-tag">{this.renderTodoList()}</ul>
      )
    }
}

export default TodoList