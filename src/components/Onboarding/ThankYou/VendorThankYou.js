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
            
                <div className='VendorThankYou'>
            <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='VendorThankYouTitle'>Complete</h1>
                <h5>You are now Onboarded with WeWork LLC</h5>
                {/* <p>Invite your vendors below</p> */}
                {/* <Link to="/dashboard"><button className='db'>Continue to Dashboard</button></Link> */}
                
                
                </div> 
        )
    }
}