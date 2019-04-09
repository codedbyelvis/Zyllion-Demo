import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./EmailSetup-FC";
import './EmailSetup.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class EmailSetup extends Component {
  render() {
    return (
      <div className="EmailSetup">
        <h1>Email Set Up</h1>
        <p>90% done</p>
        <FormContainer />
      </div>
    );
  }
}

render(<EmailSetup />, document.getElementById("root"));