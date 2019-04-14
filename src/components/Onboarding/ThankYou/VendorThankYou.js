import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from '../../../App';
import './VendorThankYou.css';


export default class VendorThankYou extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step : '3',
            progress : 100,
          };
        
    };

 



    render() {
        return (
            
            <div className='ThankYou'>
            <div className="TYmenubar">
      <div className="Setup">
      <p>Setup Progress</p>
            <p>Step <strong>{this.state.step}</strong> of 3</p>
            <p>Progress: <strong>{this.state.progress}%</strong></p>
      </div>
</div>
<div className="component">
      <h1 className='ThankYouTitle'>You are now Onboarded with Rachel's Accounting, LLC</h1>
      <div className="words">
      <p>Please check your email inbox for your registration confirmation</p></div>
</div>
              </div> 
        )
    }
}