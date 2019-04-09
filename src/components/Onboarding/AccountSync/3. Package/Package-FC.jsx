import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import Input from "../../../Forms/Input";
import Select from "../../../Forms/Select";
import Button from "../../../Forms/Button";

class PackageFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountSyncState: {
        system: [],
      },

      AccountSystems: ["Quickbooks"]

    };
    this.handleSystem = this.handleSystem.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }
        
    handleSystem(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.accountSyncState.system.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.accountSyncState.system.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.accountSyncState.system, newSelection];
      }
  
      this.setState(prevState => ({
        accountSyncState: { ...prevState.accountSyncState, system: newSelectionArray }
      }));
    }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        accountSyncState: {
          ...prevState.accountSyncState,
          [name]: value
        }
      }),
      () => console.log(this.state.accountSyncState)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.accountSyncState;

    const { system, company_id, user_id, password } =this.state.accountSyncState;


    // axios.post('/api/form', {
    //     system,
    //     company_id,
    //     user_id,
    //     password
    // })
    // .then((response) => {
    //     console.log('Quickbooks is a go')
    //     // return response;
    // })
    // .catch((error) => {
    //     console.log(error);
    //     console.log("is a no, Quickbooks is");
    // });
}


  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Select
          title={"Systems"}
          name={"systems"}
          options={this.state.AccountSystems}
          value={this.state.accountSyncState.system}
          placeholder={"Account System"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}
        <Button        
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Download Quickbooks Package"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        // {<Link to="/accountsync2" />}
        />{" "}
        {/*Quickbooks Package */}          
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        // {<Link to="/accountsync2" />}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Disconnect"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        // {<Link to="/accountsync2" />}
        />{" "}
        {/*Disconnect */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default PackageFC;
