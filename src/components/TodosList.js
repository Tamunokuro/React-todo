import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
    render() {
        return (
            <React.Fragment>
            <h2>TODOs LIST</h2>
            <ul>
                {this.props.todos.map(todo => (
               <TodoItem key={todo.id} todo={todo} 
               handleChangeProps={this.props.handleChangeProps}
                deleteTodoProps={this.props.deleteTodoProps}
               />
                ))}
            </ul>
            </React.Fragment>
           
        )

    }
}

export default TodosList