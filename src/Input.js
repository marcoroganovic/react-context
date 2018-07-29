import React from "react";
import { connect } from "./Context";

const Input = ({ newTodo, handleChange }) => (
  <input 
    type="text"
    placeholder="Do something..."
    onChange={handleChange}
    onKeyPress={handleChange}
  />
);

export default connect((state) => ({
  newTodo: state.newTodo,
}), (methods) => ({
  handleChange: methods.handleChange
}))(Input);
