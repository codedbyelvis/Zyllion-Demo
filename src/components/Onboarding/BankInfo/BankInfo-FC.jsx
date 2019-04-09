import React, { Component } from "react";
import axios from 'axios';

import Input from "../../Forms/Input";
import TextArea from "../../Forms/TextArea";
import Button from "../../Forms/Button";

class BankInfoFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BankInfo: {
        bank_alias: "",
        account_number: "",
        routing_number: "",
      },

    };
    this.handleBankAlias = this.handleBankAlias.bind(this);
    this.handleAccountNumber = this.handleAccountNumber.bind(this);
    this.handleRoutingNumber = this.handleRoutingNumber.bind(this);
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
        BankInfo: {
          ...prevState.BankInfo,
          BankAlias: value
        }
      }),
      () => console.log(this.state.BankInfo)
    );
  }

  handleAccountNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        BankInfo: {
          ...prevState.BankInfo,
          AccountNumber: value
        }
      }),
      () => console.log(this.state.BankInfo)
    );
  }

  handleRoutingNumber(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        BankInfo: {
          ...prevState.BankInfo,
          RoutingNumber: value
        }
      }),
      () => console.log(this.state.BankInfo)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        BankInfo: {
          ...prevState.BankInfo,
          [name]: value
        }
      }),
      () => console.log(this.state.BankInfo)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.BankInfo;

    const { bank_alias, account_number, routing_number } =this.state.BankInfo;


    axios.post('/api/form', {
        bank_alias,
        account_number,
        routing_number
    })
    .then((response) => {
        console.log('Welcome Money')
        return response;
    })
    .catch((error) => {
        console.log(error);
        console.log("Goodbye Money");
    });
}

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Bank Alias"}
          name={"bankalias"}
          value={this.state.BankInfo.bank_alias}
          placeholder={"Enter your Bank Alias"}
          handleChange={this.handleInput}
        />{" "}
        {/* Bank Alias */}
        <Input
          inputType={"text"}
          title={"Account Number"}
          name={"accountnumber"}
          value={this.state.BankInfo.account_number}
          placeholder={"Enter your Account Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account Number */}
        <Input
          inputType={"text"}
          title={"Routing Number"}
          name={"routingnumber"}
          value={this.state.BankInfo.routing_number}
          placeholder={"Enter your Routing Number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Routing Number */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Add bank"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Add Bank */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Remove bank"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Remove Bank */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleFormSubmit}
        //   action={this.handleClearForm}
          type={"primary"}
          title={"Continue"}
          style={buttonStyle}
          onSubmit={this.handleSubmit}
        />{" "}
        {/*Continue */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default BankInfoFC;
