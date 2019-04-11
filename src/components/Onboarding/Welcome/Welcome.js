import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from '../../../App';
import './Welcome.css';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            ClientStatus: true
        };
        this.HandleWelcome = this.HandleWelcome.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log('App',this.props);
        console.log('Try2',this.props.location.pathname);
        // console.log('qwer',this.props.location.hash);
        // this.props.location.hash = "qaz";
    }

    HandleWelcome() {
        if(this.state.ClientStatus === true) {
            console.log(true);
            console.log('App',this.props);
            
        } else {
            console.log(false);
        }
    }

    render() {
        return (
            
                <div className='Welcome'>
                <h1 className='WelcomeTitle'>Client Onboarding</h1>
                <p>Thank you for choosing Zyllion</p>
                <Link to="/accountsync1"><button className='AS1'>Begin</button></Link>

                
                
                </div> 
        )
    }
}