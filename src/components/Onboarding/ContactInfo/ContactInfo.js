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
              <navbar>
              <Link to="/contactinfo" className='nav1'>Contact Information</Link>
              <Link to="/vendorbankinfo" className='nav2'>Bank Account Integration</Link>
              <Link to="/vendorw9part1" className='nav3'>W-9 Form</Link>
              </navbar>
              <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='ContactInfoTitle'>Contact Information</h1>
                <FormContainer />
                <Link to="/vendorbankinfo"><button className='tac'>Continue</button></Link>
                
                
                </div> 
        )
    }
}