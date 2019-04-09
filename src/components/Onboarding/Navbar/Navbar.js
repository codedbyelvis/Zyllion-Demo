import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AccountSync from "./components/AccountSync/AccountSync";
import BankInfo from "./components/BankInfo/BankInfo";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import W9 from "./components/W9/W9";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import zyllion_logo from "./components/AccountSync/Logo.png";
import './Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  test() {
    console.log('success')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="Container">

            <div className="customNav">
            {/* <Link className="zyllion_logo" to="/">
            <img className="zyllion_logo"  src={zyllion_logo} />
            </Link> */}
            <div className="nav_links" >
              <ul>
              <li className="accountsync"><Link to="/">Account Sync</Link></li>
              <li className="bankinfo"><Link to="/bankinfo">Bank Account Information</Link></li>
              {/* <li className="contactinfo"><Link to='/contactinfo'>Contact Information</Link></li> */}
              <li className="w9"><Link to='/w9'>W-9 Form</Link></li>
              {/* <li className="buttons">
              <Link to="/signup"><button className='Signup'>Signup</button></Link>
              <Link to="/signin"><button className='Login'>Login</button></Link>
              </li> */}
              </ul>
            </div>
            </div>

            <div className="footer" >
              <h4>2018 Zyllion, LLC | All Rights Reserved</h4>
              <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><p>|</p></li>
                <li><a href="">Terms of Use</a></li>
              </ul>
              
              
            </div>

            

            
            <Switch>
              <Route component={AccountSync} exact path="/" />
              {/* <Route component={AccountSync} path="/accountinfo" /> */}
              <Route component={BankInfo} path="/bankinfo" />
              <Route component={ContactInfo} path="/contactinfo" />
              {/* <Route component={Signup} path="/signup" />
              <Route component={Signin} path="/signin" /> */}
              <Route component={W9} path="/w9" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}