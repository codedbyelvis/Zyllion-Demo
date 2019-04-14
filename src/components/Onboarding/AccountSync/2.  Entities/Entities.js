import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import FormContainer from "./Entities-FC";
import './Entities.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// console.log('DDDD', this.props)

export default class Entities extends Component {
    constructor(props) {
        super(props);
        this.state = {
          step : '1',
          progress : 11,
        };
      }
  render() {
    return (
      <div className="Entities">
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
      {/* {console.log('DDDD', this.props)} */}
  <div className="component">
        <h1 className="EntitiesTitle">Account Sync</h1>
        {/* <h3>Account System: </h3> */}
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/accountsync3"><button className='Link'>Continue</button></Link></div>
      </div>
  </div>
    );
  }
}

// render(<Entities />, document.getElementById("root"));