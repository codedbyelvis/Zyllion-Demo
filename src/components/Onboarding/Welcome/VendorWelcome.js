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
                <h1 className='VendorWelcomeTitle'>A Zyllion client has asked you to onboard with them</h1>
                <Link to="/contactinfo"><button className='csi'>Begin</button></Link>

                
                
                </div> 
        )
    }
}