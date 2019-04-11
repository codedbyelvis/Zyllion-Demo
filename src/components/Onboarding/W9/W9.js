import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './W9.css';


export default class W9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '3',
          progress : 66,
        };
      }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='W9'>
                <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='W9Title'>W9 says Hello</h1>
                <Link to="/thankyou"><button className='TY'>Finish</button></Link>
                
                
                </div> 
        )
    }
}