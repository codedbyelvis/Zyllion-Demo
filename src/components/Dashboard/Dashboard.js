import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            pending: true,
        };
        this.handlePending = this.handlePending.bind(this);
        this.handleRecieved = this.handleRecieved.bind(this);
      }

    componentDidMount() {
        window.scrollTo(0, 0);
        console.log(this.state.pending);
    }

    handlePending(e) {
        this.setState({pending: true});
        console.log('Jack',this.state.pending);
    }

    handleRecieved(e) {
        this.setState({pending: false});
        console.log('John',this.state.pending);
    }
    
    // handleLoading(e) {
    //     if(this.state.pending === true) {
    //         return
    //     }
    //     console.log(this.state.pending);
        
	// }

    render() {

        const PendingCompanies = () => (
            <div className='pendingModalCon'>
            <div className='pendingModal'>
                <div className='CompanyName'>
                  <div className="ChoiceTitle"><h5>Company Name</h5></div>
                  <div className="ChoiceOneName"><p><b>WeWork LLC</b></p></div>
                    <br/>
                    <div className="ChoiceTwoName"><p><b>serendipty Labs</b></p></div>
                    <br/>
                    <div className="ChoiceThreeName"><p><b>Industrious LLC</b></p></div>
                    <br/>
                </div>

                <div className='DateSent'>
                <div className="ChoiceDate"><h5>Date Sent</h5></div>
                <div className="ChoiceOneDate"><p>4/11/2019</p></div>
                    <br/>
                    <div className="ChoiceTwoDate"><p>4/08/2019</p></div>
                    <br/>
                    <div className="ChoiceThreeDate"><p>4/01/2019</p></div>
                    <br/>
                </div>

                <div className='Email'>
                <div className="ChoiceEmail"><h5>Email</h5></div>
                <div className="ChoiceOneEmail"><p>info@wework.com</p></div>
                    <br/>
                    <div className="ChoiceTwoEmail"><p>info@serendiptylabs.com</p></div>
                    <br/>
                    <div className="ChoiceThreeEmail"><p>info@industrious.com</p></div>
                    <br/>
                </div>

                <div className='Status'>
                <div className="ChoiceStatus"><h5>Status</h5></div>
                <div className="ChoiceOneStatus"><p>Pending</p></div>
                  <br/>
                  <div className="ChoiceTwoStatus"><p>Pending</p></div>
                  <br/>
                  <div className="ChoiceThreeStatus"><p>Pending</p></div>
                  <br/>
                  </div> 

                <div className='Resend'>
                <div className="ChoiceResend"><h5>Resend</h5></div>
                <div className="ChoiceOneResend">
                  <button>Resend</button></div>
                  <br/>
                  <div className="ChoiceTwoResend">
                  <button>Resend</button></div>
                  <br/>
                  <div className="ChoiceThreeResend">
                  <button>Resend</button></div>
                  <br/>
                </div>                  
                                

            {console.log('Acutally Jack', this.state.pending)}
              </div>
              </div>
            )


        const RecievedCompanies = () => (
            <div className='recievedModal'>
                <div className='CompanyName'>
                  {/* <h5>Company Name</h5> */}
                  <div className="theone"><p><b>Industrious LLC</b></p></div>
                  <br/>
                  <div><p><b>wework</b></p></div>
                  <br/>
                  <div><p><b>serendiptylabs</b></p></div>
                  {/* <p>4/04/2019</p> */}
                  {/* <p>info@Industriousoffice.com</p> */}
                    <br/>
                    {/* <p>Pending</p> */}
                    {/* <button>Resend</button> */}
                    {/* <br/> */}
                </div>
                <div className='DateRecieved'>
                    {/* <p><b>WeLive LLC</b></p> */}
                    <br/>
                    <p>4/02/2019</p>
                    <br/>
                    {/* <p>info@welive.com</p> */}
                    <br/>
                    {/* <p>Pending</p> */}
                  {/* <h5>Date Recieved</h5> */}
                <div className='Email'>
                  <p><b>Serendipty Labs</b></p>
                    <br/>
                  <p>3/25/2019</p>
                    <br/>
                  <p>info@serendiptylabs.com</p>
                    <br/>
                    <p>Expired</p>
                  
                    
                </div>

                  {/* <h5>Email</h5> */}
                  
                  
                  {/* <button>Resend</button> */}
                    {/* <br/> */}
                    
                </div>

                <div className='Status'>
                  {/* <h5>Status</h5> */}
                  
                  
                  
                  {/* <button>Resend</button> */}
                </div>   



                {console.log('Acutally John', this.state.pending)}
              </div>
            )


        return (

                <div className='Dashboard'>
                <h1 className='DashboardTitle'>Client Dashboard</h1>
                <div className="cLog"><button className="logout"><a href='http://localhost:3000/'>Logout</a></button></div>
                <div className="pebutton"><button className='pending' onClick={this.handlePending}>Pending</button></div>
                <div className="vebutton"><Link to="/vendorwelcome"><button className='ven'>Add a vendor</button></Link></div>
                <div className="rebutton"><button className='recieved' onClick={this.handleRecieved}>Recieved</button></div>

                {this.state.pending && <PendingCompanies />}
                {!this.state.pending && <RecievedCompanies />}
                
                </div> 
                
        )
    }
}

// class Parent extends React.Component {
//     constructor () {
//       super()
//       this.state = {
//         isHidden: true
//       }
//     }
//     toggleHidden () {
//       this.setState({
//         isHidden: !this.state.isHidden
//       })
//     }
//     render () {
//       return (
//         <div>
//           <button onClick={this.toggleHidden.bind(this)} >
//             Click to show modal
//           </button>
//           {!this.state.isHidden && <Child />}
//         </div>
//       )
//     }
//   }
  
//   const Child = () => (
//   <div className='modal'>
//         Hello, World!
//     </div>
//   )
  
//   const app = document.getElementById('app')
//   ReactDOM.render(Parent, app)