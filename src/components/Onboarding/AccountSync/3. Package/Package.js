import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
// import FormContainer from "./Package-FC";
import Avatar from "./Wavatar.png";
import Zyllion from "../../Zyllion Logo.png";
import './Package.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Package extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '1',
          progress : 22,
        };
      }
  render() {
    return (
      <div className="Package">
      <navbar>
        <Link to="/accountsync1" className='nav1'>Account Sync</Link>
        <Link to="/bankinfo" className='nav2'>Bank Account Integration</Link>
        <Link to="/w9part1" className='nav3'>W-9 Form</Link>
      </navbar>
      <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
        <h1>Account Sync</h1>

        <img className='Zyllion' src={Zyllion} alt=""/>
        <p><strong>. . . . . .</strong></p>
        <p>Connecting</p>
        <img className='Avatar' src={Avatar} alt=""/>
        {/* <FormContainer /> */}
        <Link to="/bankinfo"><button className='cat'>Continue</button></Link>
      </div>
    );
  }
}

// render(<Package />, document.getElementById("root"));