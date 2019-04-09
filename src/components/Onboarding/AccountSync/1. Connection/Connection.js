import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Connection-FC";
import './Connection.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class Connection extends Component {
  render() {
    return (
      <div className="Connection">
        <h1>Account Sync</h1>
        <p>I can see all of your secrets</p>
        <FormContainer />
      </div>
    );
  }
}

render(<Connection />, document.getElementById("root"));


// export default class AccountSync extends Component {
//     constructor() {
//       super();
      
//       this.state = {
//         showMenu: false,
//       };
      
//       this.showMenu = this.showMenu.bind(this);
//       this.closeMenu = this.closeMenu.bind(this);
//     }

//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }
    
//     showMenu(event) {
//       event.preventDefault();
      
//       this.setState({ showMenu: true }, () => {
//         document.addEventListener('click', this.closeMenu);
//       });
//     }
    
//     closeMenu(event) {
      
//       if (!this.AccountSyncDrop.contains(event.target)) {
        
//         this.setState({ showMenu: false }, () => {
//           document.removeEventListener('click', this.closeMenu);
//         });  
        
//       }
//     }
  
//     render() {
//       return (
//         <div className='AccountSync'>
//             <h1 className='AccountSyncTitle'>Account Sync</h1>
//             <p>I can see all your secrets</p>
//           <button onClick={this.showMenu}>
//             Show menu
//           </button>
          
//           {
//             this.state.showMenu
//               ? (
//                 <div
//                   className="menu"
//                   ref={(element) => {
//                     this.AccountSyncDrop = element;
//                   }}
//                 >
//                   <button> Quickbooks </button>
//                   <button> Intacct </button>
//                 </div>
//               )
//               : (
//                 null
//               )
//           }
//         </div>
//       );
//     }
//   }