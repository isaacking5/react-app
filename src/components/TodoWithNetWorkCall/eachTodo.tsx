import React from 'react'
import TodoModel from '../../stores/todoModel/index'
import { observer } from "mobx-react";

type EachTodoProps = {
    removeTask : Function
    eachTodo : any
}


@observer
class EachTodo extends React.Component<EachTodoProps>{
    render(){
        const {removeTask, eachTodo} = this.props;
        return(
            <li className="items todo-li-items">
              <i className= {eachTodo.completed ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={eachTodo.onCompleteTodo}></i>
              <input type="text" className={eachTodo.completed ? "text lineThrough":"text"} defaultValue = {eachTodo.title} onChange = {eachTodo.onUpdateTodoTitle}/>
              <i className="fa fa-close de" onClick={() => removeTask(eachTodo.id)}></i>
            </li>
        )
    }
}

//todos[eachTodoIndex]

export default EachTodo