import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Package-FC";
import './Package.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Package extends Component {
  render() {
    return (
      <div className="Package">
        <h1>Account Sync</h1>
        <p>90% done</p>
        <FormContainer />
      </div>
    );
  }
}

render(<Package />, document.getElementById("root"));