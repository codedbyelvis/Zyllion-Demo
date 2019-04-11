import React, { Component } from "react";

/* Import Components */
import Input from "../../../Forms/Input";
import TextArea from "../../../Forms/TextArea";
import Button from "../../../Forms/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Agree: {
        signature: ""
      },

    };
    this.handleSignature = this.handleSignature.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        Agree: {
          ...prevState.Agree,
          [name]: value
        }
      }),
      () => console.log(this.state.Agree)
    );
  }

  handleSignature(e) {
    console.log("Inside handleSignature");
    let value = e.target.value;
    this.setState(
      prevState => ({
        Agree: {
          ...prevState.Agree,
          signature: value
        }
      }),
      () => console.log(this.state.Agree)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.Agree;

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <TextArea
          title={"Sign Here"}
          rows={10}
          value={this.state.Agree.signature}
          name={"signature"}
          handleChange={this.handleSignature}
          placeholder={"Enter your electronic signature"}
        />
        {/* signature you */}
        {/* <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "} */}
        {/*Submit */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
