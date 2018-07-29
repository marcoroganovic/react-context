import React, { Component, Fragment, createContext } from "react";

const Context = createContext();

class Provider extends Component {
  state = {
    newTodo: "",
    todos: []
  };

  addTodo = () => {
    this.setState(prevState => ({
      todos: [...prevState.todos, {
        id: prevState.todos.length + 1,
        task: prevState.newTodo
      }]
    }));
  }

  removeTodo = id => {
    return (evt) => {
      this.setState(prevState => ({
        todos: prevState.todos.filter((todo) => !(todo.id === id))
      }))
    }
  }

  render() {
    return (
      <Context.Provider value={{
        data: this.state,
        methods: {
          addTodo: this.addTodo,
          removeTodo: this.removeTodo
        }
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const connect = (mapStateToProps, mapMethodsToProps) => WrappedComponent => {
  class ConnectedComponent extends Component {
    render() {
      return (
        <Context.Consumer>
          {context => {
            return <WrappedComponent 
              {...mapStateToProps(context.data)}
              {...mapMethodsToProps(context.methods)}
              {...this.props}
            /> 
          }}
        </Context.Consumer>
      )
    }
  }

  return ConnectedComponent;
}

export {
  Provider,
  connect
}
