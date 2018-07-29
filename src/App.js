import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;

  h1 {
    text-align: center;
    font-weight: 100;
    text-transform: uppercase;
  }
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <h1>Simple To-Do App</h1>
        <Input />
        <TodoList />
      </Container>
    );
  }
}
