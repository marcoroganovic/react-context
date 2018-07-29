import React from "react";
import styled from "styled-components";
import { connect } from "./Context";

const StyledInput = styled.input`
  display: block;
  width: 30%;
  padding: 10px;
  font-size: 16px;
  margin: 30px auto;
  outline: none;
  border: none;
  border-bottom: 1px solid #f0f0f0;
`;

const Input = ({ newTodo, handleChange }) => (
  <StyledInput 
    type="text"
    placeholder="Do something..."
    value={newTodo}
    onChange={handleChange}
    onKeyPress={handleChange}
  />
);

export default connect(
  (state) => ({ newTodo: state.newTodo }), 
  (methods) => ({ handleChange: methods.handleChange})
)(Input);
