import React from 'react'
type footerProps = {
    allTodos:Function;
    completedTodos:Function;
    clearCompletedTodos : any;
    activeTodos : Function;
    todosInList : boolean;
    activeTodosCount : number;
}
class Footer extends React.Component <footerProps>{
    render(){
        const {allTodos, completedTodos, clearCompletedTodos, activeTodos, todosInList, activeTodosCount} = this.props
        return(
            <div className={todosInList ? "footer-todo-list footer-display": "footer-todo-list footer-none"}>
                    <span>{activeTodosCount} Todos left</span>
                    <div>
                        <button className="filter-buttons" onClick = {()=>allTodos("All")}>All</button>
                        <button className="filter-buttons" onClick = {()=>activeTodos("Active")}>Active</button>
                        <button className="filter-buttons" onClick = {()=>completedTodos("Completed")}>Completed</button>
                    </div>
                    <button className="filter-buttons filter-clear-completed-buttons" onClick = {clearCompletedTodos}>Clear completed</button>
            </div>
        )
    }
}

export default Footer