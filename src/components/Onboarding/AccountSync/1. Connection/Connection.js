import React, { Component } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import FormContainer from "./Connection-FC";
import './Connection.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step : '1',
      progress : 0,
    };
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('New Url',this.props);
    console.log('Pez',this.props.location);
    // console.log('pweq',this.props.location.pathname);
    // console.log('qwer',this.props.location.hash);
    //     this.props.location.hash = "qaz";
}

  render() {
    return (
      
      <div className="Connection">
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
        <h1 className="ConnectionTitle">Account Sync</h1>
        <div className="Formz"><FormContainer /></div>
        <div className="buttonL"><Link to="/accountsync2"><button className='Link'>Continue</button></Link></div>
  </div>
      </div>
    );
  }
}

// render(<Connection />, document.getElementById("root"));
