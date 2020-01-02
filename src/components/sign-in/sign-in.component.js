import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in-and-sign-up.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="sign-in">
        <h2>I allready have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit"> SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
