import React, { Component } from "react";

/* Import Components */
import CheckBox from "../../../Forms/Checkbox";
import Input from "../../../Forms/w9Input";
import Select from "../../../Forms/w9Select";
import Button from "../../../Forms/Button";

class CompanyInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyTax: {
        name: "",
        business: "",
        tax: [],
        llc: [],
        address: "",
        area: "",
        account_numbers: "",
        payee: [],
        fatca: [],
        requester: "",
      },

      taxChoices: ["Individual/sole proprietor or single-member LLC", "C corporation", "S corporation", "Partnership", "Trust/Estate", "Limited liability company"],
      llcOptions: ["C corporation", "S corporation", "Partnership"],
      payeeOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      fatcaOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    };
    this.handleName = this.handleName.bind(this);
    this.handleBusiness = this.handleBusiness.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleArea = this.handleArea.bind(this);
    this.handleAccountNumbers = this.handleAccountNumbers.bind(this);
    this.handleRequester = this.handleRequester.bind(this);

    this.handleTax = this.handleTax.bind(this);
    this.handleLLC = this.handleLLC.bind(this);
    this.handlePayee = this.handlePayee.bind(this);
    this.handleFatca = this.handleFatca.bind(this);

    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          name: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleBusiness(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          business: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleTax(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.companyTax.tax.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.companyTax.tax.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.companyTax.tax, newSelection];
    }

    this.setState(prevState => ({
      companyTax: { ...prevState.companyTax, tax: newSelectionArray }
    }));
  }

  handleLLC(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.companyTax.llc.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.companyTax.llc.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.companyTax.llc, newSelection];
    }

    this.setState(prevState => ({
      companyTax: { ...prevState.companyTax, llc: newSelectionArray }
    }));
  }

  handleAddress(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          address: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleArea(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          area: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleAccountNumbers(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          account_numbers: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }
        
  handlePayee(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.companyTax.payee.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.companyTax.payee.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.companyTax.payee, newSelection];
    }

    this.setState(prevState => ({
      companyTax: { ...prevState.companyTax, payee: newSelectionArray }
    }));
  }
        
  handleFatca(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.companyTax.fatca.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.companyTax.fatca.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.companyTax.fatca, newSelection];
    }

    this.setState(prevState => ({
      companyTax: { ...prevState.companyTax, fatca: newSelectionArray }
    }));
  }

  handleRequester(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          requester: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        companyTax: {
          ...prevState.companyTax,
          [name]: value
        }
      }),
      () => console.log(this.state.companyTax)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.companyTax;

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
        <Input
          inputType={"text"}
          title={"1. Name (as shown on your income tax form). Name is required on this line; do not leave this blank."}
          name={"name"}
          value={this.state.companyTax.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          title={"2. Business name/disregarded entity name, if different from above"}
          name={"business"}
          value={this.state.companyTax.business}
          placeholder={"Enter your business's name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the business */}
        {/* <CheckBox
          title={"3. Check appropriate box for federal tax classification:"}
          name={"tax"}
          options={this.state.taxChoices}
          selectedOptions={this.state.companyTax.tax}
          handleChange={this.handleCheckBox}
        />{" "} */}
        {/* Tax Class */}
        <div>
  {/* <input type="checkbox" id="scales" name="scales"
         checked/> */}
  {/* <label for="scales">Scales</label> */}

  {/* <input type="checkbox" id="single" name="single"/>
  <label for="Individual/sole proprietor or single-member LLC">Individual/sole proprietor or single-member LLC</label>

  <input type="checkbox" id="ccorp" name="ccorp"/>
  <label for="C corporation">C corporation</label>

  <input type="checkbox" id="scorp" name="scorp"/>
  <label for="S corporation">S corporation</label>

  <input type="checkbox" id="double" name="double"/>
  <label for="Partnership">Partnership</label>

  <input type="checkbox" id="trust" name="trust"/>
  <label for="Trust/Estate">Trust/Estate</label>

  <input type="checkbox" id="llc" name="llc"/>
  <label for="Limited Liability company">Limited Liability company</label> */}
  3. Check appropriate box for federal tax classification:
  <input type="radio" name="tax" value="Individual/sole proprietor or single-member LLC"/> Individual/sole proprietor or single-member LLC
  <input type="radio" name="tax" value="C corporation"/> C corporation
  <input type="radio" name="tax" value="S corporation"/> S corporation
  <input type="radio" name="tax" value="Partnership"/> Partnership
  <input type="radio" name="tax" value="Trust/Estate"/> Trust/Estate
  <input type="radio" name="tax" value="Limited Liability company"/> Limited Liability company

</div>
        <Select 
          select multiple={false}
          title={"If LLC, enter the tax classification"}
          name={"llc"}
          options={this.state.llcOptions}
          value={this.state.companyTax.llc}
          placeholder={"Tax Status"}
          handleChange={this.handleInput}
        />{" "}
        {/* LLC Tax Selection */}
        4. Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3);
        <Select 
          select multiple={false}
        //   title={"4. Exemptions (codes apply only to certain entities, not individuals; see instructions on page 3);"}
          title={"Exempt payee code (if any)"}
          name={"payee"}
          options={this.state.payeeOptions}
          value={this.state.companyTax.payee}
          placeholder={""}
          handleChange={this.handleInput}
        />{" "}
        {/* Payee exemptions */}
        <Select 
          select multiple={false}
          title={"Exemption from FATCA reporting code (if any)"}
          name={"fatca"}
          options={this.state.fatcaOptions}
          value={this.state.companyTax.fatca}
          placeholder={""}
        //   title={"(Applies to accounts maintained outside the U.S.)"}
          handleChange={this.handleInput}
        />{" "}(Applies to accounts maintained outside the U.S.)
        {/* FATCA exemptions */}
        <Input
          inputType={"text"}
          title={"5. Address (number, street, and apt. or suite no."}
          name={"address"}
          value={this.state.companyTax.address}
          placeholder={"Enter your business's address"}
          handleChange={this.handleInput}
        />{" "}
        {/* Address of the business */}
        <Input
          inputType={"text"}
          title={"6. City, state, and ZIP Code"}
          name={"area"}
          value={this.state.companyTax.area}
          placeholder={"Enter your business's location"}
          handleChange={this.handleInput}
        />{" "}
        {/* Area of the business */}
        <Input
          inputType={"text"}
          title={"List account number(s) here (optional)"}
          name={"account_number"}
          value={this.state.companyTax.account_number}
          placeholder={"Enter account number"}
          handleChange={this.handleInput}
        />{" "}
        {/* Account number */}
        <Input
          inputType={"text"}
          title={"7. Requester's name and address (optional)"}
          name={"requester"}
          value={this.state.companyTax.requester}
          placeholder={"Enter requester's name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the Requester */}
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

export default CompanyInfo;
