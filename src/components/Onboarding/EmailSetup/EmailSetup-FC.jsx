import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import Input from "../../../Forms/Input";
import Select from "../../../Forms/Select";
import Button from "../../../Forms/Button";

class EmailSetupFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EmailSetup: {
        company_id: "",
        user_id: "",
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
    }
        
    handleSystem(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.EmailSetup.system.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.EmailSetup.system.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.EmailSetup.system, newSelection];
      }
  
      this.setState(prevState => ({
        EmailSetup: { ...prevState.EmailSetup, system: newSelectionArray }
      }));
    }

  handleCompanyId(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        EmailSetup: {
          ...prevState.EmailSetup,
          CompanyId: value
        }
      }),
      () => console.log(this.state.EmailSetup)
    );
  }

  handleUserId(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        EmailSetup: {
          ...prevState.EmailSetup,
          email: value
        }
      }),
      () => console.log(this.state.EmailSetup)
    );
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        EmailSetup: {
          ...prevState.EmailSetup,
          subject: value
        }
      }),
      () => console.log(this.state.EmailSetup)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        EmailSetup: {
          ...prevState.EmailSetup,
          [name]: value
        }
      }),
      () => console.log(this.state.EmailSetup)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.EmailSetup;

    const { system, company_id, user_id, password } =this.state.EmailSetup;


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
          value={this.state.EmailSetup.system}
          placeholder={"Account System"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}
        <Input
          inputType={"text"}
          title={"Company ID"}
          name={"companyid"}
          value={this.state.EmailSetup.CompanyId}
          placeholder={"Company ID"}
          handleChange={this.handleInput}
        />{" "}
        {/* Company Id */}
        <Input
          inputType={"text"}
          title={"User ID"}
          name={"userid"}
          value={this.state.EmailSetup.user_id}
          placeholder={"User ID"}
          handleChange={this.handleInput}
        />{" "}
        {/* User Id */}
        <Input
          inputType={"text"}
          title={"Password"}
          name={"password"}
          value={this.state.EmailSetup.password}
          placeholder={"Password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Password */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Connect"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        // {<Link to="/accountsync2" />}
        />{" "}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default EmailSetupFC;
