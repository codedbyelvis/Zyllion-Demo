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
      <div className="VendorBankInfo">
      <navbar>
      <Link to="/contactinfo" className='nav1'>Contact Information</Link>
      <Link to="/vendorbankinfo" className='nav2'>Bank Account Integration</Link>
      <Link to="/vendorw9part1" className='nav3'>W-9 Form</Link>
      </navbar>
      <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
        <h1>Bank Account Integration</h1>
        <FormContainer />
        <Link to="/vendorw9part1"><button className='Vdog'>Continue</button></Link>
      </div>
    );
  }
}

// render(<VendorBankInfo />, document.getElementById("root"));
