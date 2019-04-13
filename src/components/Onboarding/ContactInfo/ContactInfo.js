import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FormContainer from "./ContactInfo-FC";
import './ContactInfo.css';


export default class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '0',
          progress : 0,
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
          
    <div className='ContactInfo'>
  <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}%</p>
        </div>
        <div className="navbar">
        <Link to="/contactinfo" className='nav1'><p>Contact Information</p></Link>
        <Link to="/vendorbankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/vendorw9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="Concomponent">
        <h1 className="ContactInfoTitle">Contact Information</h1>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/vendorbankinfo"><button className='Link'>Continue</button></Link></div>
  </div>
    </div> 
    )
  }
}