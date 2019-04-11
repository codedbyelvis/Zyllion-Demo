import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CompanyInfo.css';
import FormContainer from './CompanyInfo-FC';


export default class CompanyInfo extends Component {
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

                <div className='CompanyInfo'>
                <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
                <h1 className='CompanyInfoTitle'>Request for Taxpayer Identification Number and Certification</h1>
                <h4>Part I</h4>

                <FormContainer />
                {/* <div>
  <input type="checkbox" id="scales" name="scales"
         checked/>
  <label for="scales">Scales</label>

  <input type="checkbox" id="horns" name="horns"/>
  <label for="horns">Horns</label>
</div> */}
                <Link to="/w9part2"><button className='CI'>Continue</button></Link>
                
                
                </div> 
        )
    }
}