import React from "react";
import { connect } from "./Context";

const TodoList = ({ todos, removeTodo }) => {
  const list = todos.map(todo => {
    return (
      <li key={todo.id} onClick={removeTodo(todo.id)}>
        {todo.task}
      </li>
    );
  });

  return <ul>{list}</ul>;
}

export default connect((state) => ({
  todos: state.todos
}), (methods) => ({
  removeTodo: methods.removeTodo
}))(TodoList);
