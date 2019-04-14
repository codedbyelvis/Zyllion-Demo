import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Identification.css';
import FormContainer from './Identification-FC';


export default class VendorIdentification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '3',
          progress : 77,
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='Identification'>
   <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step <strong>{this.state.step}</strong> of 3</p>
              <p>Progress: <strong>{this.state.progress}%</strong></p>
              <div className="hr"><hr/></div>
        </div>
        <div className="navbar">
        <Link to="/contactinfo" className='nav1'><p>Contact Information</p></Link>
        <Link to="/bankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/w9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="w9component2">
  <h1 className='IdentificationTitle'>Request for Taxpayer Identification Number and Certification</h1>
    <div className="script"><h4>Part II</h4>
    <p>Enter your TIN in the appropriate box. The TIN provided must match the name given on the "Name" line to avoid
        backup withholding. For indivduals, this is your social security number (SSN). However, for a resident alien,
        sole proprietor, or disregarded entity, see the Part I instructions on page 3. For other entities, it is your
        employer Identification number (EIN). If you do not have a number, see How to get a TIN on page 3.
    </p>
    <p>Note. if the account is in more than one name, see the chart on page 4 for the guidelines on whose number to enter</p></div>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/vendorw9part3"><button className='Link'>Continue</button></Link></div>
  </div>
                </div> 
        )
    }
}