import React from "react";
import styled from "styled-components";
import { connect } from "./Context";

const Ul = styled.ul`
  width: 50%;
  margin: 20px auto;
  padding: 0;
  list-style: none;

  li {
    padding: 10px;
    border-bottom: 1px solid #333;
    cursor: pointer;
  }
`

const TodoList = ({ todos, removeTodo }) => {
  const list = todos.map(todo => {
    return (
      <li key={todo.id} onClick={removeTodo(todo.id)}>
        {todo.task}
      </li>
    );
  });

  return <Ul>{list}</Ul>;
}

export default connect((state) => ({
  todos: state.todos
}), (methods) => ({
  removeTodo: methods.removeTodo
}))(TodoList);
