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
            <div className='pendingModal'>
                <div className='CompanyName'>
                  <h5>Company Name</h5>
                  <p><b>WeWork LLC</b></p>
                    <br/>
                  <p><b>Serendipty Labs</b></p>
                    <br/>
                  <p><b>Industrious LLC</b></p>
                </div>

                <div className='DateSent'>
                  <h5>Date Sent</h5>
                  <p>4/11/2019</p>
                    <br/>
                  <p>4/08/2019</p>
                    <br/>
                  <p>4/01/2019</p>
                </div>

                <div className='Email'>
                  <h5>Email</h5>
                  <p>info@Industriousoffice.com</p>
                    <br/>
                  <p>info@wework.com</p>
                </div>

                <div className='Status'>
                  <h5>Status</h5>
                  <p>Pending</p>
                  <button>Resend</button>
                    <br/>
                  <p>Pending</p>
                  <button>Resend</button>
                    <br/>
                  <p>Expired</p>
                  <button>Resend</button>
                </div>                  
                                

            {console.log('Acutally Jack', this.state.pending)}
              </div>
            )


        const RecievedCompanies = () => (
            <div className='recievedModal'>
                <div className='RCompanyName'>
                  <h5>Company Name</h5>
                  <p><b>WeLive LLC</b></p>
                    <br/>
                  <p><b>Serendipty Labs</b></p>
                    <br/>
                  <p><b>Industrious LLC</b></p>
                </div>

                <div className='DateRecieved'>
                  <h5>Date Recieved</h5>
                  <p>4/09/2019</p>
                    <br/>
                  <p>4/04/2019</p>
                    <br/>
                  <p>3/25/2019</p>
                </div>

                <div className='REmail'>
                  <h5>Email</h5>
                  <p>info@Industriousoffice.com</p>
                    <br/>
                  <p>info@wework.com</p>
                </div>

                <div className='Status'>
                  <h5>Status</h5>
                  <p>Pending</p>
                  <button>Resend</button>
                    <br/>
                  <p>Pending</p>
                  <button>Resend</button>
                    <br/>
                  <p>Expired</p>
                  <button>Resend</button>
                </div>   



                {console.log('Acutally John', this.state.pending)}
              </div>
            )


        return (

                <div className='Dashboard'>
                <h1 className='DashboardTitle'>Client Dashboard</h1>
                <button className="logout"><a href='http://localhost:3000/'>Logout</a></button>
                <button className='pending' onClick={this.handlePending}>Pending</button>
                {this.state.pending && <PendingCompanies />}
                <button className='recieved' onClick={this.handleRecieved}>Recieved</button>
                {!this.state.pending && <RecievedCompanies />}
                <Link to="/vendorwelcome"><button className='ven'>Add a vendor</button></Link>
                
                
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