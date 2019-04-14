import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch, Link } from "react-router-dom";
import Welcome from "./components/Onboarding/Welcome/Welcome";
import VendorWelcome from "./components/Onboarding/Welcome/VendorWelcome";
import AccountSync1 from "./components/Onboarding/AccountSync/1. Connection/Connection";
import AccountSync2 from "./components/Onboarding/AccountSync/2.  Entities/Entities";
import AccountSync3 from "./components/Onboarding/AccountSync/3. Package/Package";
import ContactInfo from "./components/Onboarding/ContactInfo/ContactInfo";
import Dashboard from "./components/Dashboard/Dashboard";
import BankInfo from "./components/Onboarding/BankInfo/BankInfo";
import VendorBankInfo from "./components/Onboarding/BankInfo/VendorBankInfo";
import CompanyInfo from "./components/Onboarding/W9/CompanyInfo/CompanyInfo";
import VendorCompanyInfo from "./components/Onboarding/W9/CompanyInfo/VendorCompanyInfo";
import Identification from "./components/Onboarding/W9/Identification/Identification";
import VendorIdentification from "./components/Onboarding/W9/Identification/VendorIdentification";
import Signature from "./components/Onboarding/W9/Signature/Signature";
import VendorSignature from "./components/Onboarding/W9/Signature/VendorSignature";
import ThankYou from "./components/Onboarding/ThankYou/ThankYou";
import VendorThankYou from "./components/Onboarding/ThankYou/VendorThankYou";
// import Signin from "./components/Signin/Signin";
// import Signup from "./components/Signup/Signup";
// import zyllion_logo from "./components/AccountSync/Logo.png";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step : '0',
      progress : 0,
    };
  }

//   let progressBar = (state) => {
//     let step = 0;
//     let progress = 0;
//     switch(this.props.location.pathname) {
//       case 'accountsync1':
//           console.log('We')
//           step = 1;
//           progress = 0;
//       break;
//       case 'accountsync2':
//           console.log('Are')
//           step = 1;
//           progress = 11;
//       break;
//       case 'accountsync3':
//           console.log('Venom')
//           step = 1;
//           progress = 22;
//       break;
//       case 'bankinfo':
//           console.log('Sun')
//           step = 2;
//           progress = 33;
//       break;
//       case 'w9':
//           console.log('Moon')
//           step = 3;
//           progress = 66;
//       break;
//           default:
//           return state;
//   }
//   this.setState({
//     step: step,
//     progress: progress
//   })
// }; progressBar(state);

  render() {
  //   let progressBar = (state) => {
  //     let step = 0;
  //     let progress = 0;
  //     switch(this.props.location.pathname) {
  //       case 'accountsync1':
  //           console.log('We')
  //           step = 1;
  //           progress = 0;
  //       break;
  //       case 'accountsync2':
  //           console.log('Are')
  //           step = 1;
  //           progress = 11;
  //       break;
  //       case 'accountsync3':
  //           console.log('Venom')
  //           step = 1;
  //           progress = 22;
  //       break;
  //       case 'bankinfo':
  //           console.log('Sun')
  //           step = 2;
  //           progress = 33;
  //       break;
  //       case 'w9':
  //           console.log('Moon')
  //           step = 3;
  //           progress = 66;
  //       break;
  //           default:
  //           return state;
  //   }
  //   this.setState({
  //     step: step,
  //     progress: progress
  //   })
  // }; progressBar(this.state);

    return (
      <div>
        <BrowserRouter>
          <div className="Container">

            <div className="customNav">
            {/* <Link className="zyllion_logo" to="/">
            <img className="zyllion_logo"  src={zyllion_logo} />
            </Link> */}
            <div className="nav_links" >
              {/* <p>Setup Progress</p>
              <p>Step <strong>{this.state.step}</strong> of 3</p>
              <p>Progress: <strong>{this.state.progress}%</strong> done</p> */}
              <ul>
              {/* <li className="Welcome"><Link to="/">Welcome</Link></li> */}
              {/* <li className="dashboard"><Link to="/dashboard">Dashboard</Link></li> */}
              {/* <li className="accountsync"><Link to="/accountsync1">Account Sync</Link></li> */}
              {/* <li className="bankinfo"><Link to="/bankinfo">Bank Account Integration</Link></li> */}
              {/* <li className="contactinfo"><Link to='/contactinfo'>Contact Information</Link></li> */}
              {/* <li className="w9"><Link to='/w9part1'>W-9 Form</Link></li> */}
              {/* <li className="buttons">
              <Link to="/signup"><button className='Signup'>Signup</button></Link>
              <Link to="/signin"><button className='Login'>Login</button></Link>
              </li> */}
              </ul>
            </div>
            </div>

            {/* <div className="footer" >
              <h4>2018 Zyllion, LLC | All Rights Reserved</h4>
              <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><p>|</p></li>
                <li><a href="">Terms of Use</a></li>
              </ul>
              
              
            </div> */}

            

            
            <Switch>
              <Route component={Welcome} exact path="/" />
              <Route component={VendorWelcome} exact path="/vendorwelcome" />
              <Route component={Dashboard} path="/dashboard" />
              <Route component={AccountSync1} path="/accountsync1" />
              <Route component={AccountSync2} path="/accountsync2" />
              <Route component={AccountSync3} path="/accountsync3" />
              <Route component={ContactInfo} path="/contactinfo" />
              <Route component={BankInfo} path="/bankinfo" />
              <Route component={VendorBankInfo} path="/vendorbankinfo" />
              <Route component={CompanyInfo} path="/w9part1" />
              <Route component={VendorCompanyInfo} path="/vendorw9part1" />
              <Route component={Identification} path="/w9part2" />
              <Route component={VendorIdentification} path="/vendorw9part2" />
              <Route component={Signature} path="/w9part3" />
              <Route component={VendorSignature} path="/vendorw9part3" />
              <Route component={ThankYou} path="/thankyou" />
              <Route component={VendorThankYou} path="/vendorthankyou" />
              {/* <Route component={Signup} path="/signup" />
              <Route component={Signin} path="/signin" /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
