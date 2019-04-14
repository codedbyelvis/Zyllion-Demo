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
  <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step <strong>{this.state.step}</strong> of 3</p>
              <p>Progress: <strong>{this.state.progress}%</strong></p>
              <div className="hr"><hr/></div>
        </div>
        <div className="navbar">
        <Link to="/accountsync1" className='nav1'><p>Account Sync</p></Link>
        <Link to="/bankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/w9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="component">
        <h1 className="BankInfoTitle">Bank Account Integration</h1>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/w9part1"><button className='Link'>Continue</button></Link></div>
  </div>
      </div>
    );
  }
}

// render(<BankInfo />, document.getElementById("root"));
