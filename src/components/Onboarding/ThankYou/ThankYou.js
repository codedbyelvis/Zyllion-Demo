import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from '../../../App';
import './ThankYou.css';


export default class ThankYou extends Component {
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
            <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='ThankYouTitle'>Thank You</h1>
                <h5>Thank you for being a part of Zyllion!</h5>
                <p>Your Dashboard is now synced</p>
                <Link to="/dashboard"><button className='db'>Continue to Dashboard</button></Link>
                
                
                </div> 
        )
    }
}