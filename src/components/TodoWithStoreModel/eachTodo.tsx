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
        console.log(eachTodo.isCompleted)
        return(
            <li className="items todo-li-items">
              <i className= {eachTodo.isCompleted ? "fa fa-check-circle co":"fa fa-circle-thin co"} onClick={eachTodo.onCompleteTodo}></i>
              <input type="text" className={eachTodo.isCompleted ? "text lineThrough":"text"} defaultValue = {eachTodo.task} onChange = {eachTodo.onUpdateTodoTitle}/>
              <i className="fa fa-close de" onClick={() => removeTask(eachTodo.id)}></i>
            </li>
        )
    }
}

//todos[eachTodoIndex]

export default EachTodo