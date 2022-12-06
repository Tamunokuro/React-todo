import React from "react"
import TodoItem from "./TodoItems"

const TodosList = props => {
  // let todos = JSON.parse(localStorage.getItem("todos"))
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}
export default TodosList