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
  <div className="w9component1">
        <h1 className="CompanyInfoTitle">Request for Taxpayer Identification Number and Certification</h1>
        <div className="scriptC"><h4>Part I</h4></div>
        <div className="FormzC"><FormContainer /></div>
        <div className="buttonL"><Link to="/w9part2"><button className='Link'>Continue</button></Link></div>
  </div>
  </div> 
    )
  }
}

// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import './CompanyInfo.css';
// import FormContainer from './CompanyInfo-FC';
// // import W9 from '../../../W9/index.html'
// // var myw9form = {__html:'foo'}

// export default class CompanyInfo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           step : '3',
//           progress : 66,
//           isLoaded: false,
//           page:{__html:'foobar '}
//         };
//       }

//     componentDidMount() {
//         window.scrollTo(0, 0);
//         fetch('../../../W9/index.html')
//         .then(res=>{
//           console.log("Help me",(res))
//           this.state.page = {__html:res.data}
          
//         }).then (
//           (result)=>{this.setState({isLoaded:true})}
//         )
       
    
//     }

//     render() {
//       const {step,progress,isLoaded,page} = this.state
//       console.log(page)
//         return (
//             <div dangerouslySetInnerHTML={page}/>

//     )
//   }
// }