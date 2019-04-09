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
      EntitesState: {
        system: [],
        companies: []
      },

      AccountSystems: ["Quickbooks"],
      CompaniesList: ["Company1"]

    };
    this.handleSystem = this.handleSystem.bind(this);
    this.handleCompanyList = this.handleCompanyList.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);

  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }
        
    handleSystem(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
  
      if (this.state.EntitesState.system.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.EntitesState.system.filter(
          s => s !== newSelection
        );
      } else {
        newSelectionArray = [...this.state.EntitesState.system, newSelection];
      }
  
      this.setState(prevState => ({
        EntitesState: { ...prevState.EntitesState, system: newSelectionArray }
      }));
    }

    handleCompanyList(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
    
        if (this.state.EntitesState.companies.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.EntitesState.companies.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.EntitesState.companies, newSelection];
        }
    
        this.setState(prevState => ({
          EntitesState: { ...prevState.EntitesState, companies: newSelectionArray }
        }));
      }

//   handleInput(e) {
//     let value = e.target.value;
//     let name = e.target.name;
//     this.setState(
//       prevState => ({
//         EntitesState: {
//           ...prevState.EntitesState,
//           [name]: value
//         }
//       }),
//       () => console.log(this.state.EntitesState)
//     );
//   }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.EntitesState;

    const { system, companies } =this.state.EntitesState;


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
          value={this.state.EntitesState.system}
          placeholder={"Account System"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account System Selection */}
        <Select
          title={"Companies"}
          name={"companies"}
          options={this.state.CompaniesList}
          value={this.state.EntitesState.companies}
          placeholder={"Select Entitiy"}
          handleChange={this.handleInput}
        />{" "}
        {/* Entities Selection */}
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
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Disconnect"}
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

export default EntitiesFC;
