import React, { Component } from 'react';
import './Welcome.css';


export default class Welcome extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='Welcome'>
                <h1 className='WelcomeTitle'>Be our Guest</h1>
                
                
                </div> 
        )
    }
}