import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./BankInfo-FC";
import './BankInfo.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default class BankInfo extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="BankInfo">
        <h3>Bank Account Integration</h3>
        <FormContainer />
      </div>
    );
  }
}

render(<BankInfo />, document.getElementById("root"));
