import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from '../../../App';
import './VendorWelcome.css';


export default class VendorWelcome extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            
                <div className='VendorWelcome'>
                {/* <div className="VWel"> */}
                <h1 className='VendorWelcomeTitle'>Vendor onboarding</h1>
                <p>Rachel's Accounting, LLC has asked you to onboard with them</p>
                {/* </div> */}
                <Link to="/contactinfo"><button className='VWel'>Begin</button></Link>

                
                
                </div> 
        )
    }
}