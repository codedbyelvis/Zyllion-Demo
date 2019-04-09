import React, { Component } from 'react';
import './Dashboard.css';


export default class Dashboard extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='Dashboard'>
                <h1 className='DashboardTitle'>Did we do the Dashboard thing?</h1>
                
                
                </div> 
        )
    }
}