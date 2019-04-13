import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import FormContainer from "./BankInfo-FC";
import './BankInfo.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class VendorBankInfo extends Component {
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
  <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}%</p>
        </div>
        <div className="navbar">
        <Link to="/contactinfo" className='nav1'><p>Contact Information</p></Link>
        <Link to="/bankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/w9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="component">
        <h1 className="BankInfoTitle">Bank Account Integration</h1>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/vendorw9part1"><button className='Link'>Continue</button></Link></div>
  </div>
      </div>
    );
  }
}

// render(<VendorBankInfo />, document.getElementById("root"));
