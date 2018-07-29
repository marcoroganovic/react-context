import React, { Component, createContext } from "react";

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
      }],
      newTodo: ""
    }));
  }

  removeTodo = id => {
    return (evt) => {
      this.setState(prevState => ({
        todos: prevState.todos.filter((todo) => !(todo.id === id))
      }))
    }
  }

  handleChange = evt => {
    if(evt.key === "Enter")
      return this.addTodo();

    const { value } = evt.target;
    this.setState(prevState => ({
      newTodo: value
    }));
  }

  render() {
    return (
      <Context.Provider value={{
        data: this.state,
        methods: {
          removeTodo: this.removeTodo,
          handleChange: this.handleChange
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
          {({ data, methods }) => {
            return <WrappedComponent 
              {...mapStateToProps(data)}
              {...mapMethodsToProps(methods)}
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
