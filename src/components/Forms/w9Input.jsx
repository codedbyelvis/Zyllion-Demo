import React from "react";

const Input = props => {
  //console.log(props.value);
  return (
    <div className="w9form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
