import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import FormContainer from "./Entities-FC";
import './Entities.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// console.log('DDDD', this.props)

export default class Entities extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '1',
          progress : 11,
        };
      }
  render() {
    return (
      <div className="Entities">
      <navbar>
        <Link to="/accountsync1" className='nav1'>Account Sync</Link>
        <Link to="/bankinfo" className='nav2'>Bank Account Integration</Link>
        <Link to="/w9part1" className='nav3'>W-9 Form</Link>
      </navbar>
      <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
      {/* {console.log('DDDD', this.props)} */}
        <h1>Account Sync</h1>
        {/* <h3>Account System: </h3> */}
        <FormContainer />
        <Link to="/accountsync3"><button className='13'>Continue</button></Link>
      </div>
    );
  }
}

// render(<Entities />, document.getElementById("root"));