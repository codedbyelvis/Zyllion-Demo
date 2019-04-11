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
      PackageState: {
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
  
      if (this.state.PackageState.system.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.PackageState.system.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.PackageState.system, newSelection];
      }
  
      this.setState(prevState => ({
        PackageState: { ...prevState.PackageState, system: newSelectionArray }
      }));
    }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        PackageState: {
          ...prevState.PackageState,
          [name]: value
        }
      }),
      () => console.log(this.state.PackageState)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.PackageState;

    const { system, company_id, user_id, password } =this.state.PackageState;


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
          name={"system"}
          options={this.state.AccountSystems}
          value={this.state.PackageState.system}
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
