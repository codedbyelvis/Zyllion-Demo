import React, { Component } from "react";
import axios from 'axios';

/* Import Components */
import Input from "../../Forms/Input";
import Select from "../../Forms/Select";
import Button from "../../Forms/Button";

class ContactInfoFC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ContactInfoState: {
        company_name: "",
        title: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        website: "",
        email: "",
        phone: "",
        mobile: "",
        fax: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },

      StateInitials: [
          "AL", "AK", "AZ","AR","CA","CO","CT","DE","FL","GA",
          "HI", "ID", "IL","IN","IA","KS","KY","LA","ME","MD",
          "MA","MI","MN","MS", "MO", "MT","NE","NV","NH","NJ",
          "NM","NY","NC","ND", "OH", "OK","OR","PA","RI","SC",
          "SD","TN","TX","UT", "VT", "VA","WA","WV","WI","WY"
        ]

    };
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleMiddleName = this.handleMiddleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleSuffix = this.handleSuffix.bind(this);

    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleFax = this.handleFax.bind(this);
    
    this.handleAddress1 = this.handleAddress1.bind(this);
    this.handleAddress2 = this.handleAddress2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleCompanyName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          company_name: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }
  
  handleTitle(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          title: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }
  
  handleFirstName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          first_name: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }
  
  handleMiddleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          middle_name: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleLastName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          last_name: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleSuffix(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          suffix: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleWebsite(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          website: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          email: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handlePhone(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          phone: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleMobile(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          mobile: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }
  
  handleFax(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          fax: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleAddress1(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          address1: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleAddress2(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          address2: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleCity(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          city: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleState(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.ContactInfoState.state.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.ContactInfoState.state.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.ContactInfoState.state, newSelection];
    }

    this.setState(prevState => ({
      ContactInfoState: { ...prevState.ContactInfoState, state: newSelectionArray }
    }));
  }

  handleZip(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          zip: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }

  handleCountry(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          country: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }


  //Submit and Clear

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        ContactInfoState: {
          ...prevState.ContactInfoState,
          [name]: value
        }
      }),
      () => console.log(this.state.ContactInfoState)
    );
  }


    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.ContactInfoState;
  
      const { company_name,
        title,
        first_name,
        middle_name,
        last_name,
        suffix,
        website,
        email,
        phone,
        mobile,
        fax,
        address1,
        address2,
        city,
        state,
        zip,
        country, } =this.state.ContactInfoState;
  
    //   axios({
    //       method: 'post',
    //       url: 'http://127.0.0.1:8000/account/create',
    //       data: {
    //         company_name,
    //         first_name,
    //         last_name,
    //         payment_method: 1,
    //         plan: 7,
    //         num_users,
    //         phone,
    //         ext,
    //         address1,
    //         address2,
    //         city,
    //         state,
    //         zip,
    //         country,
    //         creditcard,
    //         email,
    //         password,
    //         payment_id
    //       }
          
    //     }).then((res)=> {
    //        console.log('Crossed the bridge safely!'); 
    //        console.log(res.data); 
    //     }).catch((error)=> {
    //         console.log(error);
    //         console.log("We cracked a few eggs");
    //     });
  
  }

  render() {
    return (
      <form className="CIcontainer-fluid" onSubmit={this.handleFormSubmit}>
        <div className="cn"><Input
          inputType={"text"}
          title={"Company Name"}
          name={"company_name"}
          value={this.state.ContactInfoState.company_name}
          placeholder={"Enter your Company"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Name of the company */}
        {/* <Input
          inputType={"text"}
          title={"Title"}
          name={"title"}
          value={this.state.ContactInfoState.title}
          placeholder={"Enter your Title"}
          handleChange={this.handleInput}
        />{" "} */}
        {/* Vendor Title */}
        <div className="fn"><Input
          inputType={"text"}
          title={"First Name"}
          name={"first_name"}
          value={this.state.ContactInfoState.first_name}
          placeholder={"Enter your First Name"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Vendor First Name */}
        {/* <Input
          inputType={"text"}
          title={"Middle Name"}
          name={"middle_name"}
          value={this.state.ContactInfoState.middle_name}
          placeholder={"Enter your Middle Name"}
          handleChange={this.handleInput}
        />{" "} */}
        {/* Vendor Middle Name */}
        <div className="ln"><Input
          inputType={"text"}
          title={"Last Name"}
          name={"last_name"}
          value={this.state.ContactInfoState.last_name}
          placeholder={"Enter your Last Name"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Vendor Last Name */}
        {/* <Input
          inputType={"text"}
          title={"Website"}
          name={"website"}
          value={this.state.ContactInfoState.website}
          placeholder={"Enter your website"}
          handleChange={this.handleInput}
        />{" "} */}
        {/* website */}
        <div className="em"><Input
          inputType={"text"}
          title={"Email"}
          name={"email"}
          value={this.state.ContactInfoState.email}
          placeholder={"Enter your email"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Email */}
        <div className="pn"><Input
          inputType={"text"}
          title={"Phone Number"}
          name={"phone"}
          value={this.state.ContactInfoState.phone}
          placeholder={"Enter your Phone Number"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Phone Number */}
        {/* <Input
          inputType={"text"}
          title={"Mobile Number"}
          name={"mobile"}
          value={this.state.ContactInfoState.mobile}
          placeholder={"Enter your Mobile Number"}
          handleChange={this.handleInput}
        />{" "} */}
        {/* Mobile Number */}
        {/* <Input
          inputType={"text"}
          title={"Fax Number"}
          name={"fax"}
          value={this.state.ContactInfoState.fax}
          placeholder={"Enter your Fax Number"}
          handleChange={this.handleInput}
        />{" "} */}
        {/* Fax Number */}
        <div className="a1"><Input
          inputType={"text"}
          title={"Address 1"}
          name={"address1"}
          value={this.state.ContactInfoState.address1}
          placeholder={"Enter your Address"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Address 1 */}
        <div className="a2"><Input
          inputType={"text"}
          title={"Address 2"}
          name={"address2"}
          value={this.state.ContactInfoState.address2}
          placeholder={"Address 2"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Address 2 */}
        <div className="ct"><Input
          inputType={"text"}
          title={"City"}
          name={"city"}
          value={this.state.ContactInfoState.city}
          placeholder={"Enter your City"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* City */}
        <div className="st"><Select
          title={"State"}
          name={"state"}
          options={this.state.StateInitials}
          value={this.state.ContactInfoState.state}
          placeholder={"State"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* State Selection */}
        <div className="zp"><Input
          inputType={"text"}
          title={"Zipcode"}
          name={"zip"}
          value={this.state.ContactInfoState.zip}
          placeholder={"Zipcode"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Zipcode */}
        <div className="cy"><Input
          inputType={"text"}
          title={"Country"}
          name={"country"}
          value={this.state.ContactInfoState.country}
          placeholder={"Enter your Country"}
          handleChange={this.handleInput}
        />{" "}</div>
        {/* Country */}
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

export default ContactInfoFC;
