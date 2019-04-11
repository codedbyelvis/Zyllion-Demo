import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import FormContainer from "./Package-FC";
import './Package.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '1',
          progress : 22,
        };
      }
  render() {
    return (
      <div className="Package">
      <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
        <h1>Account Sync</h1>
        <FormContainer />
        <Link to="/bankinfo"><button className='cat'>Continue</button></Link>
      </div>
    );
  }
}

// render(<Package />, document.getElementById("root"));