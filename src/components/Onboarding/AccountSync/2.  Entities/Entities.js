import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Entities-FC";
import './Entities.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// console.log('DDDD', this.props)

export default class Entities extends Component {
  render() {
    return (
      <div className="Entities">
      {/* {console.log('DDDD', this.props)} */}
        <h1>Account Sync</h1>
        <p>66% done</p>
        {/* <h3>Account System: </h3> */}
        <FormContainer />
      </div>
    );
  }
}

render(<Entities />, document.getElementById("root"));