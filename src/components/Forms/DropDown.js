import React, { Component } from 'react';
import './BankInfo.css';


// export default class BankInfo extends Component {

//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }

//     render() {
//         return (

//                 <div className='BankInfo'>
//                 {/* <h1 className='BankInfoTitle'>Why Zyllion?</h1> */}
                

                
//                 </div> 
//         )
//     }
// }

export default class BankInfo extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu(event) {
      
      if (!this.dropdownMenu.contains(event.target)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
        
      }
    }
  
    render() {
      return (
        <div className='BankInfo'>
        <h1 className='BankInfoTitle'>Why Zyllion?</h1>
          <button onClick={this.showMenu}>
            Show menu
          </button>
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button> Menu item 1 </button>
                  <button> Menu item 2 </button>
                  <button> Menu item 3 </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }