import React, { Component } from "react";
import axios from 'axios';

import Input from "../../../Forms/w9Input";
import Button from "../../../Forms/Button";

class IdentificationFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Identification: {
        ss_number: "",
        ei_number: "",
      },

    };
    this.handleSS = this.handleSS.bind(this);
    this.handleEI = this.handleEI.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  componentDidMount() {
    window.scrollTo(0, 0); 
    }   

  handleBankAlias(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        Identification: {
          ...prevState.Identification,
          BankAlias: value
        }
      }),
      () => console.log(this.state.Identification)
    );
  }

  handleSS(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        Identification: {
          ...prevState.Identification,
          ss_number: value
        }
      }),
      () => console.log(this.state.Identification)
    );
  }

  handleEI(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        Identification: {
          ...prevState.Identification,
          ei_number: value
        }
      }),
      () => console.log(this.state.Identification)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        Identification: {
          ...prevState.Identification,
          [name]: value
        }
      }),
      () => console.log(this.state.Identification)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.Identification;

    const { ss_number, ei_number } =this.state.Identification;


    // axios.post('/api/form', {
    //     account_number,
    //     routing_number
    // })
    // .then((response) => {
    //     console.log('Welcome Money')
    //     return response;
    // })
    // .catch((error) => {
    //     console.log(error);
    //     console.log("Goodbye Money");
    // });
}

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Social Security Number:"}
          name={"ss_number"}
          value={this.state.Identification.ss_number}
          placeholder={"Social Security Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Social Security Number */}
        <Input
          inputType={"text"}
          title={"Employer Identification Number:"}
          name={"ei_number"}
          value={this.state.Identification.ei_number}
          placeholder={"Employer Identification Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Employee Identification Number */}
        {/* <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Continue"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "} */}
        {/*Continue */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default IdentificationFC;
