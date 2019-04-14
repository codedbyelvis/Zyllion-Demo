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
  <div className="menubar">
        <div className="Setup">
        <p>Setup Progress</p>
              <p>Step <strong>{this.state.step}</strong> of 3</p>
              <p>Progress: <strong>{this.state.progress}%</strong></p>
              <div className="hr"><hr/></div>
        </div>
        <div className="navbar">
        <Link to="/accountsync1" className='nav1'><p>Account Sync</p></Link>
        <Link to="/bankinfo" className='nav2'><p>Bank Account Integration</p></Link>
        <Link to="/w9part1" className='nav3'><p>W-9 Form</p></Link>
        </div>
  </div>
  <div className="component">
        <h1 className="PackageTitle">Account Sync</h1>
        <div className="images">
      <div className="123"><img className='Zyllion' src={Zyllion} alt=""/></div>
      <div className="two"><p><strong>. . . . . .</strong></p>
      <p>Connecting</p></div>
      <div className="456"><img className='Avatar' src={Avatar} alt=""/></div>
        </div>
        {/* <h3>Account System: </h3> */}
        {/* <div className="Formz"><FormContainer /></div> */}
        <div className="buttonL"><Link to="/bankinfo"><button className='Link'>Continue</button></Link></div>
  </div>
      </div>
    );
  }
}
// render(<Package />, document.getElementById("root"));