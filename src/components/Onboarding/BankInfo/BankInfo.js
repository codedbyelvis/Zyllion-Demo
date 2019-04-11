import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import FormContainer from "./BankInfo-FC";
import './BankInfo.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class BankInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step : '2',
      progress : 33,
    };
  }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="BankInfo">
      <navbar>
        <Link to="/accountsync1" className='nav1'>Account Sync</Link>
        <Link to="/bankinfo" className='nav2'>Bank Account Integration</Link>
        <Link to="/w9part1" className='nav3'>W-9 Form</Link>
      </navbar>
      <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
        <h1>Bank Account Integration</h1>
        <FormContainer />
        <Link to="/w9part1"><button className='dog'>Continue</button></Link>
      </div>
    );
  }
}

// render(<BankInfo />, document.getElementById("root"));
