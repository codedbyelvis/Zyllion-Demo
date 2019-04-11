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

                <div className='VendorIdentification'>
                <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='VendorIdentificationTitle'>Request for Taxpayer VendorIdentification Number and Certification</h1>
                <h4>Part II</h4>
                <p>Enter your TIN in the appropriate box. The TIN provided must match the name given on the "Name" line to avoid
                    backup withholding. For indivduals, this is your social security number (SSN). However, for a resident alien,
                    sole proprietor, or disregarded entity, see the Part I instructions on page 3. For other entities, it is your
                    employer VendorIdentification number (EIN). If you do not have a number, see How to get a TIN on page 3.
                </p>
                <p>Note. if the account is in more than one name, see the chart on page 4 for the guidelines on whose number to enter</p>

                <FormContainer />
                <Link to="/vendorw9part3"><button className='VID'>Continue</button></Link>
                
                
                </div> 
        )
    }
}