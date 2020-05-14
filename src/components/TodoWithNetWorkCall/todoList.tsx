import React from 'react'
import { observer } from 'mobx-react';

import EachTodo from './eachTodo'

type TodoListProps = {
  todos: Array<any>
  removeTask : Function
}   

@observer
class TodoList extends React.Component <TodoListProps>{
renderTodoList = () => {
  const {todos, removeTask} = this.props
        const todoListItems = todos.map((eachEl) => {
            return (
              <EachTodo removeTask = {removeTask} eachTodo = {eachEl} key={Math.random()}/>
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