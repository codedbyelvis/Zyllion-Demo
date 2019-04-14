import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import Input from "../../../Forms/Input";
import Select from "../../../Forms/Select";
import Button from "../../../Forms/Button";

class EntitiesFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EntitiesState: {
        system: [],
        company: [],
      },

      AccountSystems: ["Quickbooks"],
      CompaniesList: ["Rachel's Accounting, LLC"]

    };
    this.handleSystem = this.handleSystem.bind(this);
    this.handleCompanies = this.handleCompanies.bind(this);
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
  
      if (this.state.EntitiesState.system.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.EntitiesState.system.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.EntitiesState.system, newSelection];
      }
  
      this.setState(prevState => ({
        EntitiesState: { ...prevState.EntitiesState, system: newSelectionArray }
      }));
    }
        
    handleCompanies(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.EntitiesState.company.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.EntitiesState.company.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.EntitiesState.company, newSelection];
      }
  
      this.setState(prevState => ({
        EntitiesState: { ...prevState.EntitiesState, company: newSelectionArray }
      }));
    }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        EntitiesState: {
          ...prevState.EntitiesState,
          [name]: value
        }
      }),
      () => console.log(this.state.EntitiesState)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.EntitiesState;

    const { system, company_id, user_id, password } =this.state.EntitiesState;


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
          value={this.state.EntitiesState.system}
          placeholder={"Account System"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}
        <Select
          title={"Companies"}
          name={"company"}
          options={this.state.CompaniesList}
          value={this.state.EntitiesState.company}
          placeholder={"Select Entity"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}        
        {/* <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
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

export default EntitiesFC;
