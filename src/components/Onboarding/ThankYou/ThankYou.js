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
              <div className="TYmenubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}%</p>
        </div>
  </div>
  <div className="component">
        <h1 className='ThankYouTitle'>Registration Completed</h1>
        <div className="words">
        <p>Please check your email inbox for your registration confirmation</p></div>
        <div className="buttonL"><Link to="/dashboard"><button className='Link'>Continue to Dashboard</button></Link></div>
  </div>
                </div> 
        )
    }
}