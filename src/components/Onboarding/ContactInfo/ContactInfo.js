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