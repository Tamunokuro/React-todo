/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <>
        <h2>TODOs LIST</h2>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>
      </>

    );
  }
}

export default TodosList;
