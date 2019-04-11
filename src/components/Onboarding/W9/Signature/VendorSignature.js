import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Signature.css';
import FormContainer from './Signature-FC';


export default class VendorSignature extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '3',
          progress : 88,
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='VendorSignature'>
              <navbar>
              <Link to="/contactinfo" className='nav1'>Contact Information</Link>
              <Link to="/vendorbankinfo" className='nav2'>Bank Account Integration</Link>
              <Link to="/vendorw9part1" className='nav3'>W-9 Form</Link>
              </navbar>
                <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='VendorSignatureTitle'>Request for Taxpayer Identification Number and Certification</h1>
                <h4>Part III</h4>
                <p>Under penalties of perjury, I certify that:</p>
                <p><strong>1.</strong> The number shown on this form is my correct taxpayer identification number (or I am
                waiting for a number to be issued to me), and</p>
                <p><strong>2.</strong> I am not subject to backup withholding because: (a) I am exempt from backup withholding, 
                or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding 
                as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no 
                longer subject to to backup withholding, and</p>
                <p><strong>3.</strong> I am a U.S. citizen or other U.S. person (defined below).</p>
                <p>Certification instructions. You must cross item 2 above if you have been notified by the IRS that you are
                    currently subject to backup withholding because you have failed to report all interest and dividends on 
                    your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid, acquisition, 
                    or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement 
                    (IRA), and generally, payments other than interest and dividends, you are not required to sign the certification, 
                    but you must provide your correct TIN. <a href=''>See the instructions below.</a>
                </p>

                {/* <p><strong>Sign Here</strong></p> */}
                <FormContainer />
                <Link to="/vendorthankyou"><button className='VTY'>Finish</button></Link>
                
                
                </div> 
        )
    }
}