// import React, { Component } from "react";
// import { render } from "react-dom";
// import FormContainer from "./W9-FC";
// import axios from 'axios';
// import './Contact.css';
// export default class Contact extends Component {

//     render() {
//     return (
//       <div className="Contact">
//       <h1 className='ContactTitle'>Contact</h1>
//       <h3 className='Contactinfo'>Questions about blockchain or when we plan to launch? No problem. 
//           Drop us a line and we will get back to you.</h3>
//         <FormContainer />
//       </div>
//     );
//   }
// }

// render(<Contact />, document.getElementById("root"));
import React, { Component } from 'react';
import './W9.css';


export default class W9 extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                <div className='W9'>
                <h1 className='W9Title'>W9 says Hello</h1>
                
                
                </div> 
        )
    }
}