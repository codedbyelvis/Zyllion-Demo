import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import Input from "../../../Forms/Input";
import Select from "../../../Forms/Select";
import Button from "../../../Forms/Button";

class AccountSyncFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountSyncState: {
        system: [],
        company_id: "",
        user_id: "",
        password: ""
      },

      AccountSystems: ["Quickbooks"]

    };
    this.handleSystem = this.handleSystem.bind(this);
    this.handleCompanyId = this.handleCompanyId.bind(this);
    this.handleUserId = this.handleUserId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('App',this.props); 
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

  handleCompanyId(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        accountSyncState: {
          ...prevState.accountSyncState,
          CompanyId: value
        }
      }),
      () => console.log(this.state.accountSyncState)
    );
  }

  handleUserId(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        accountSyncState: {
          ...prevState.accountSyncState,
          email: value
        }
      }),
      () => console.log(this.state.accountSyncState)
    );
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        accountSyncState: {
          ...prevState.accountSyncState,
          subject: value
        }
      }),
      () => console.log(this.state.accountSyncState)
    );
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
    // this.props.history.push("/accountsync2");
}


  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Select 
          select multiple={false}
          title={"Systems"}
          name={"system"}
          options={this.state.AccountSystems}
          value={this.state.accountSyncState.system}
          placeholder={"Account System"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}
        <Input
          inputType={"text"}
          title={"Company ID"}
          name={"company_id"}
          value={this.state.accountSyncState.CompanyId}
          placeholder={"Company ID"}
          handleChange={this.handleInput}
        />{" "}
        {/* Company Id */}
        <Input
          inputType={"text"}
          title={"User ID"}
          name={"user_id"}
          value={this.state.accountSyncState.user_id}
          placeholder={"User ID"}
          handleChange={this.handleInput}
        />{" "}
        {/* User Id */}
        <Input
          inputType={"password"}
          title={"Password"}
          name={"password"}
          value={this.state.accountSyncState.password}
          placeholder={"Password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Password */}
        {/* <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Connect"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        // {<Link to="/accountsync2" />}
        />{" "} */}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default AccountSyncFC;
