import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CompanyInfo.css';
import FormContainer from './CompanyInfo-FC';


export default class CompanyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '3',
          progress : 66,
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

  <div className='CompanyInfo'>
  <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}%</p>
        </div>
        <div className="navbar">
        <Link to="/accountsync1" className='nav1'><p>Account Sync</p></Link>
        <Link to="/bankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/w9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="w9component1">
        <h1 className="CompanyInfoTitle">Request for Taxpayer Identification Number and Certification</h1>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/w9part2"><button className='Link'>Continue</button></Link></div>
  </div>
  </div> 
    )
  }
}