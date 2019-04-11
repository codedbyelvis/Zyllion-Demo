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
        <p>Setup Progress</p>
              <p>Step {this.state.step} of 3</p>
              <p>Progress: {this.state.progress}% done</p>
        <h1>Account Sync</h1>
        <p>I can see all of your secrets</p>
        <FormContainer />
        <Link to="/accountsync2"><button className='12'>Continue</button></Link>
      </div>
    );
  }
}

// render(<Connection />, document.getElementById("root"));
